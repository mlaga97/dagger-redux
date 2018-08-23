// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import Header from './Header';
import Response from './Response';

// TODO: Refactor into significantly smaller components
class ResponseList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.response.all.requested,
    });
  }

  // TODO: Fix this abomination in particular
  // TODO: Base on globally valid options instead of locally valid?
  GetOptionsFromResponses(target) {
    return(
      <React.Fragment>
        {
          // Create an option for each *unique* value of the target parameter in the current set of responses
          [...new Set(Object.keys(this.props.responses.all).map(index => this.props.responses.all[index].metadata[target].id))].map(index => (
            <option value={index}>{index}</option>
          ))
        }
      </React.Fragment>
    )
  }

  render() {
    if (!this.props.responses.all) {
      return <div>Retrieving response list...</div>;
    }

    return (
      <div>
        <form onSubmit={
          (event) => {
            console.log(event);
          }
        }>
          <FormGroup>
            <ControlLabel>Visit Date Start</ControlLabel>
            <FormControl name='visitDateStart' type='date' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Visit Date End</ControlLabel>
            <FormControl name='visitDateEnd' type='date' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Date Submitted Start</ControlLabel>
            <FormControl name='dateSubmittedStart' type='date' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Date Submitted End</ControlLabel>
            <FormControl name='dateSubmittedEnd' type='date' />
          </FormGroup>
          <FormGroup controlId='formControlsSelect'>
            <ControlLabel>User ID</ControlLabel>
            <FormControl name='userID' componentClass='select'>
              <option />
              {this.GetOptionsFromResponses('user')}
            </FormControl>
            <br/>
            <ControlLabel>Clinic ID</ControlLabel>
            <FormControl name='clinicID' componentClass='select'>
              <option />
              {this.GetOptionsFromResponses('clinic')}
            </FormControl>
            <br/>
            <ControlLabel>Patient ID</ControlLabel>
            <FormControl name='patientID' componentClass='select'>
              <option />
              {this.GetOptionsFromResponses('patient')}
            </FormControl>
          </FormGroup>
          <Button onClick={() => {
            // TODO: Make not this way

            let parameters = {}

            const visitDateStart = document.getElementsByName('visitDateStart')[0].value;
            if (visitDateStart !== '') {
              parameters.visitDateStart = visitDateStart;
            }

            const visitDateEnd = document.getElementsByName('visitDateEnd')[0].value;
            if (visitDateEnd !== '') {
              parameters.visitDateEnd = visitDateEnd;
            }

            const dateSubmittedStart = document.getElementsByName('dateSubmittedStart')[0].value;
            if (dateSubmittedStart !== '') {
              parameters.dateSubmittedStart = dateSubmittedStart;
            }

            const dateSubmittedEnd = document.getElementsByName('dateSubmittedEnd')[0].value;
            if (dateSubmittedEnd !== '') {
              parameters.dateSubmittedEnd = dateSubmittedEnd;
            }

            const userID = document.getElementsByName('userID')[0].value;
            if (userID !== '') {
              parameters.userID = userID;
            }

            const clinicID = document.getElementsByName('clinicID')[0].value;
            if (clinicID !== '') {
              parameters.clinicID = clinicID;
            }

            const patientID = document.getElementsByName('patientID')[0].value;
            if (patientID !== '') {
              parameters.patientID = patientID;
            }

            this.props.dispatch({
              type: actions.response.all.requested,
              parameters,
            });
          }}>Update</Button>
        </form>
        <hr/>
        <h3>Results</h3>
        <Table>
          <Header />
          <tbody>
            {
              Object.keys(this.props.responses.all).map(index => (
                <Response response={this.props.responses.all[index]} />
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  state => ({
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
