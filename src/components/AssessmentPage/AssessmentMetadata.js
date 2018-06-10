// Library imports
import React from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

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
          <FormGroup>
            <ControlLabel>Assessment Date Today</ControlLabel>
            <br />
            <ToggleButtonGroup name="assessmentDateToday" type="radio" >
              <ToggleButton onChange={this.handleChange} value>Yes</ToggleButton>
              <ToggleButton onChange={this.handleChange} value={false}>No</ToggleButton>
            </ToggleButtonGroup>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Assessment Date</ControlLabel>
            <FormControl name="assessmentDate" type="date" onChange={this.handleChange} />
          </FormGroup>
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  )
}

export default AssessmentMetadata;
