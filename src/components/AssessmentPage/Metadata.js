// Library imports
import React from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

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

  render = () => (
    <React.Fragment>
      <FormGroup>
        <ControlLabel>Assessment Date Today</ControlLabel>
        <br />
        <ToggleButtonGroup name="assessmentDateToday" type="radio" >
          <ToggleButton onChange={this.handleChange} value>Yes</ToggleButton>
          <ToggleButton onChange={this.handleChange} value={false}>No</ToggleButton>
        </ToggleButtonGroup>
      </FormGroup>
      {
        (!this.props.response.metadata || (this.props.response.metadata && this.props.response.metadata.assessmentDateToday !== 'true')) ? (
          <FormGroup>
            <ControlLabel>Assessment Date</ControlLabel>
            <FormControl name="assessmentDate" type="date" onChange={this.handleChange} />
          </FormGroup>
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
          Assessment Metadata
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          <FormGroup>
            <ControlLabel>Patient ID</ControlLabel>
            <FormControl name="patientID" type="text" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Patient DOB</ControlLabel>
            <FormControl name="patientDOB" type="date" onChange={this.handleChange} />
          </FormGroup>
          <AssessmentDate
            response={this.props.response}
            onUpdate={this.props.onUpdate}
          />
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  )
}

export default AssessmentMetadata;
