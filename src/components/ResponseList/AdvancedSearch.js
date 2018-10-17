// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import FocusableInput from '../FocusableInput';

const SortDate = ({
  name,
  children,
}) => (
  <Col sm={4}>
    <FocusableInput type='date' name={name} label={children} />
  </Col>
);

const SortSelect = ({
  name,
  label,
  children,
}) => (
  <Col sm={4}>
    <FocusableInput componentClass='select' name={name} label={label}>
      <option />
      {children}
    </FocusableInput>
  </Col>
);

const SortText = ({
  name,
  label
}) => (
  <Col sm={4}>
    <FocusableInput type='input' name={name} label={label} />
  </Col>
);

class Sorting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  // TODO: Fix this abomination in particular
  // TODO: Base on globally valid options instead of locally valid?
  GetOptionsFromResponses(target) {
    const { responses } = this.props;
    return (
      <React.Fragment>
        {
          // Create an option for each *unique* value of the target
          // parameter in the current set of responses
          [
            ...new Set(
              Object.keys(responses.all)
                .map(index => responses.all[index].metadata[target].id)
            ),
          ].map(index => (
            <option value={index}>{index}</option>
          ))
        }
      </React.Fragment>
    );
  }

  handleClick = () => {
    // TODO: Make not this way

    const parameters = {};

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
    parameters.patientID = patientID;

    this.props.dispatch({
      type: actions.response.all.requested,
      parameters,
    });
  }

  handleToggle = (e) => {
    console.log(String(this.state.open));
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <form onSubmit={(e) => {e.preventDefault();}}>
        <div className='simple-search-wrapper'>
          {/*<SortSelect name='patientID' label='Patient ID'>{this.GetOptionsFromResponses('patient')}</SortSelect>*/}
          <SortText name='patientID' label='Patient ID' />
          <Col sm={4} className='col-button'><Button onClick={this.handleClick}>Search</Button></Col>
        </div>
        <Panel className='panel-unadorned' onToggle={this.handleToggle} expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              <SortDate name='visitDateStart'>Visit Date Start</SortDate>
              <SortDate name='visitDateEnd'>Visit Date End</SortDate>
              <SortDate name='dateSubmittedStart'>Date Submitted Start</SortDate>
              <SortDate name='dateSubmittedEnd'>Date Submitted End</SortDate>
              <SortSelect name='userID' label='User ID'>{this.GetOptionsFromResponses('user')}</SortSelect>
              <SortSelect name='clinicID' label='Clinic ID'>{this.GetOptionsFromResponses('clinic')}</SortSelect>
            </Panel.Body>
          </Panel.Collapse>
          <Panel.Heading>
            <Panel.Title toggle>
              {(this.state.open) ? '▴ Hide Advanced Search' : '▾ Advanced Search'}
            </Panel.Title>
          </Panel.Heading>
        </Panel>
      </form>
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
)(Sorting);
