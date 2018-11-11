// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

let formatDate = function(input) {
  let pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

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
                <div className='info-content'>{formatDate(dob)}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Patient;
