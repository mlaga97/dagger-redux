// Library imports
import React from 'react';
import { Col, Table } from 'react-bootstrap';

let formatDate = function(input) {
  let pattern = /(d{4})-(d{2})-(d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

const Patient = ({
  patient: { id, dob },
}) => (
   <Col sm={6}>
      <Table striped bordered className='table-response table-vertical'>
          <thead>
            <tr>
               <th colSpan='2'>
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
);

export default Patient;
