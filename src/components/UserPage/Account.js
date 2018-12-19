// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Account = () => (
  <React.Fragment>
    <Panel>
      <Panel.Heading>
        Account Information
      </Panel.Heading>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={12}>
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type='text'
                  value='JDoe'
                />
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
    <Panel>
      <Panel.Heading>
        Password
      </Panel.Heading>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={12}>
              <FormGroup>
                <ControlLabel>Current Password</ControlLabel>
                <FormControl
                  type='password'
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>New Password</ControlLabel>
                <FormControl
                  type='password'
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl
                  type='password'
                />
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
  </React.Fragment>
)

export default Account;
