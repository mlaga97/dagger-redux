// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

const Record = ({
  visit,
  dateSubmitted,
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Record Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={4}>
              <div className='info-group'>
                <label className='info-label'>Assessment Performed</label>
                <div className='info-content'>{visit.date}</div>
              </div>
            </Col>
            <Col sm={4}>
              <div className='info-group'>
                <label className='info-label'>Assessment Recorded</label>
                <div className='info-content'>{dateSubmitted}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Record;
