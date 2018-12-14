// Library imports
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

// Components
import ClinicList from '../ClinicList/List'

// TODO: Get from redux state
const Clinics = ({user, allClinics}) => {
  // Get the user clinics
  let clinics = {};

  if (!user.clinics) {
    return null;
  }

  user.clinics.forEach((clinicID) => {
    clinics[clinicID] = allClinics[clinicID]
  })

  return (
    <Panel>
      <Panel.Heading>
        Clinics
      </Panel.Heading>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={12}>
              <ClinicList clinics={clinics}/>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel>
  );
}

export default Clinics;
