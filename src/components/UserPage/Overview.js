// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Overview = () => (
  <Panel>
    <Panel.Heading>
      Overview
    </Panel.Heading>
    <Panel.Body>
      <Grid>
        <Row>
          <Col sm={12}>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type='text'
                value='John Doe'
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type='text'
                value='example@example.com'
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Phone Number</ControlLabel>
              <FormControl
                type='text'
                value='555-555-5555'
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Default Clinic</ControlLabel>
              <FormControl componentClass='select' value='0000'>
                <option value='0000'>Example Clinic</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    </Panel.Body>
  </Panel>
)

export default Overview;
