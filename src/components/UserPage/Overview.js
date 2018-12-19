// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Overview = () => (
  <React.Fragment>
    <Panel>
      <Panel.Heading>
        Overview
      </Panel.Heading>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={12}>
              <FormGroup>
                <ControlLabel>Basic Information</ControlLabel>
                <FormControl
                  type='text'
                  value='John Doe'
                />
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
    <Panel>
      <Panel.Heading>
        Contact Information
      </Panel.Heading>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={12}>
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
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
    <Panel>
      <Panel.Heading>
        Additional Information
      </Panel.Heading>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={12}>
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
  </React.Fragment>
)

export default Overview;
