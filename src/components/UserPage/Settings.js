// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const Settings = () => (
  <Panel>
    <Panel.Heading>
      Flags
    </Panel.Heading>
    <Panel.Body>
      <Grid>
        <Row>
          <Col sm={12}>
            <FormGroup>
              <ControlLabel>Active</ControlLabel>
              <ToggleButtonGroup name='active'>
                <ToggleButton>Yes</ToggleButton>
                <ToggleButton>No</ToggleButton>
              </ToggleButtonGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Tester</ControlLabel>
              <ToggleButtonGroup name='active'>
                <ToggleButton>Yes</ToggleButton>
                <ToggleButton>No</ToggleButton>
              </ToggleButtonGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Developer</ControlLabel>
              <ToggleButtonGroup name='active'>
                <ToggleButton>Yes</ToggleButton>
                <ToggleButton>No</ToggleButton>
              </ToggleButtonGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Administrator</ControlLabel>
              <ToggleButtonGroup name='active'>
                <ToggleButton>Yes</ToggleButton>
                <ToggleButton>No</ToggleButton>
              </ToggleButtonGroup>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    </Panel.Body>
  </Panel>
)

export default Settings;
