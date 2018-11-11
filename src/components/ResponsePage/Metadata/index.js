// Library imports
import React from 'react';
import { Panel, Grid, Row } from 'react-bootstrap';

// Components
import Patient from './Patient';
import Record from './Record';
import User from './User';
import Clinic from './Clinic';

const Metadata = ({
  metadata: { patient, clinic, user, visit, dateSubmitted },
}) => (
   <Panel defaultExpanded>
      <Panel.Heading>
         <Panel.Title toggle>Overview</Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
         <Panel.Body>
            <Grid>
               <Row>
                  <React.Fragment>
                     <Patient patient={patient} />
                     <Record visit={visit} dateSubmitted={dateSubmitted} />
                     <User user={user} />
                     <Clinic clinic={clinic} />
                  </React.Fragment>
               </Row>
            </Grid>
         </Panel.Body>
      </Panel.Collapse>
   </Panel>

);

export default Metadata;
