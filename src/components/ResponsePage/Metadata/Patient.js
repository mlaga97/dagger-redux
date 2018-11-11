// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, Table } from 'react-bootstrap';

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
               <Table striped bordered className='table-response table-vertical'>
                   <thead>
                     <tr>
                        <th colspan='2'>
                           Patient Overview
                        </th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                        <th>Patient ID</th>
                        <td data-label='Patient ID'>{id}</td>
                     </tr>
                     <tr>
                        <th>Patient DOB</th>
                        <td data-label='Patient DOB'>{formatDate(dob)}</td>
                     </tr>
                   </tbody>
               </Table>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Patient;
