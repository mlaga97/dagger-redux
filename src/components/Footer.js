// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

// Styling
import '../style/dagger.css';

export default () => {
  const versionString = process.env.REACT_APP_VERSION_STRING;
  const revisionDate = process.env.REACT_APP_REVISION_DATE;

  return (
    <div className='container'>
      <Panel className='panel-footer'>
        <Panel.Body>
          <Grid>
            <Row>
              <Col sm={3} className='logo'>
                <img
                  alt='USM SOSW'
                  className='img-sosw-left'
                  src='./images/sosw_368x140.png'
                />
              </Col>
              <Col sm={6} className='flex credits'>
                <div>Dagger {versionString} ({revisionDate})</div>
                <div>&copy; 2012, 2018 The University of Southern Mississippi</div>
                <div>Funded by the Gulf Region Health Outreach Program</div>
              </Col>
              <Col sm={3} className='logo'>
                <img
                  alt='G.R.H.O.P'
                  src='./images/GRHOP.png'
                  className='img-grhop-right'
                />
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    </div>
  )
}
