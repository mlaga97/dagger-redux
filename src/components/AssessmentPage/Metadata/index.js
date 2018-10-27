// Library imports
import React from 'react';
import { Panel, FormGroup, ControlLabel, Grid, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// Components
import PatientID from './PatientID';
import PatientDOB from './PatientDOB';
import AssessmentDate from './AssessmentDate';
import AssessmentDateToday from './AssessmentDateToday';
import FocusableInput from '../../FocusableInput';

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
                <PatientID
                  response={this.props.response}
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={4}>
                <PatientDOB
                  response={this.props.response}
                  onChange={this.handleChange}
                />
              </Col>
              <Col sm={4}>
                <AssessmentDateToday
                  onChange={this.handleChange}
                />
                <AssessmentDate
                  onChange={this.handleChange}
                  metadata={this.props.response.metadata}
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
