// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

// Styling
import '../style/dagger.css';

export default () => (
  <div className='container'>
    <Panel className='panel-footer'>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={3} className='logo'>
              <img src='./images/sosw_368x140.png' alt='USM SOSW' className='img-sosw-left' />
            </Col>
            <Col sm={6} className='flex credits'>
              <div>Dagger 2.0 (demo)</div>
              <div>&copy; 2013,2018 The University of Southern Mississippi</div>
              <div>Funded by the Gulf Region Health Outreach Program</div>
            </Col>
            <Col sm={3} className='logo'>
              <img src='./images/GRHOP.png' alt='G.R.H.O.P' className='img-grhop-right' />
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
  </div>
)
