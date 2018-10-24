// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, FormGroup, ControlLabel, Grid, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// Components
import FocusableInput from '../FocusableInput';

class AssessmentDate extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    // Assessment Date Today
    if (name === 'assessmentDateToday') {
      this.props.onUpdate({
        name,
        value,
        class: 'metadata',
      });

      this.props.onUpdate({
        name: 'assessmentDate',
        value: (value === 'true') ? (new Date()).toLocaleDateString('en-CA') : null, // TODO: Not this.
        class: 'metadata',
      });
    } else {
      this.props.onUpdate({
        name,
        value,
        class: 'metadata',
      });
    }
  }

  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render = () => (
    <React.Fragment>
      <FormGroup  onClick={this.handleClick}>
        <ControlLabel>Assessment Date Today</ControlLabel>

        <ToggleButtonGroup name="assessmentDateToday" type="radio" required='required' >
          <ToggleButton ref='inputNode' onChange={this.handleChange} value>Yes</ToggleButton>
          <ToggleButton onChange={this.handleChange} value={false}>No</ToggleButton>
        </ToggleButtonGroup>
        <span className="info-content"> {(new Date()).toLocaleDateString('en-US')} </span>
      </FormGroup>
      {
        (!this.props.response.metadata || (this.props.response.metadata && this.props.response.metadata.assessmentDateToday !== 'true')) ? (
          <FocusableInput label='Assessment Date' name="assessmentDate" type="date" onChange={this.handleChange} required='required' />
        ) : null
      }
    </React.Fragment>
  )
}

class AssessmentMetadata extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.onUpdate({
      name,
      value,
      class: 'metadata',
    });
  }

  render = () => (
    <Panel defaultExpanded>
      <Panel.Heading>
        <Panel.Title toggle>
          Patient Identification / Assessment Date
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          <Grid>
            <Row>
              <Col sm={4}>
                <FocusableInput label='Patient ID' name="patientID" type="text" onChange={this.handleChange} autoFocus required='required' autoComplete='off' />
              </Col>
              <Col sm={4}>
                <FocusableInput label='Patient DOB' name='patientDOB' type='date' onChange={this.handleChange} required='required' />
              </Col>
              <Col sm={4}>
                <AssessmentDate
                  response={this.props.response}
                  onUpdate={this.props.onUpdate}
                />
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  )
}

export default AssessmentMetadata;
