// Library imports
import React from 'react';
import { Col, Table } from 'react-bootstrap';

const Clinic = ({
  clinic: { id },
}) => (
   <Col sm={6}>
     <Table striped bordered className='table-response table-vertical'>
         <thead>
           <tr>
              <th colSpan='2'>
                 Clinic Overview
              </th>
           </tr>
         </thead>
         <tbody>
           <tr>
              <th>Clinic ID</th>
              <td data-label='Clinic ID'>{id}</td>
           </tr>
         </tbody>
     </Table>
   </Col>
);

export default Clinic;
