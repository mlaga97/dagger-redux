// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

const Patient = ({
  patient: { id, dob },
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Patient Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={4}>
              <div className='info-group'>
                <label className='info-label'>Patient ID</label>
                <div className='info-content'>{id}</div>
              </div>
            </Col>
            <Col sm={4}>
              <div className='info-group'>
                <label className='info-label'>Patient DOB</label>
                <div className='info-content'>{dob}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Patient;
