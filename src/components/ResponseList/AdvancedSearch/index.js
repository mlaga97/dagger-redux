// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';

// Actions
import actions from '../../../actions';

// Components
import SortDate from './SortDate.js';
import SortText from './SortText.js';
import SortSelect from './SortSelect.js';

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
    const list = [
      'userID',
      'clinicID',
      'patientID',
      'visitDateEnd',
      'visitDateStart',
      'dateSubmittedEnd',
      'dateSubmittedStart',
    ];

    list.forEach((key) => {
      const value = document.getElementsByName(key)[0].value;
      if (value !== '') {
        parameters[key] = value;
      }
    });

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
      <form onSubmit={(e) => {e.preventDefault(); this.handleClick()}}>
        <div className='simple-search-wrapper'>
          {/*
            <SortSelect
              name='patientID'
              label='Patient ID'
            >
              {this.GetOptionsFromResponses('patient')}
            </SortSelect>
          */}
          <SortText name='patientID' label='Patient ID' />

        </div>
        <Panel
          className='panel-unadorned'
          onToggle={this.handleToggle}
          expanded={this.state.open}
        >
          <Panel.Heading>
            <Panel.Title toggle>
              <Grid>
                <Row>
                  <Col sm={4} className='col-search-button'>
                    <Button onClick={this.handleClick}>Search</Button>
                    <div className={(this.state.open) ? 'collapse-trigger collapsed' : 'collapse-trigger expanded'}>Advanced Search</div>
                  </Col>
                </Row>
              </Grid>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Grid>
                <Row>
                  <SortDate name='visitDateStart'>Visit Date Start</SortDate>
                  <SortDate name='visitDateEnd'>Visit Date End</SortDate>
                  <SortDate name='dateSubmittedStart'>Date Submitted Start</SortDate>
                  <SortDate name='dateSubmittedEnd'>Date Submitted End</SortDate>
                  <SortSelect name='userID' label='User ID'>
                    {this.GetOptionsFromResponses('user')}
                  </SortSelect>
                  <SortSelect name='clinicID' label='Clinic ID'>
                    {this.GetOptionsFromResponses('clinic')}
                  </SortSelect>
                </Row>
              </Grid>
            </Panel.Body>
          </Panel.Collapse>
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
