// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

const User = ({
  user: { id },
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Clinician Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={4}>
              <div className='info-group'>
                <label className='info-label'>User ID</label>
                <div className='info-content'>{id}</div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default User;
