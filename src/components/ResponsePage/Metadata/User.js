// Library imports
import React from 'react';
import { Col, Table } from 'react-bootstrap';

const User = ({
  user: { id },
}) => (
   <Col sm={6}>
     <Table striped bordered className='table-response table-vertical'>
         <thead>
           <tr>
              <th colSpan='2'>
                 Clinician Overview
              </th>
           </tr>
         </thead>
         <tbody>
           <tr>
              <th>User ID</th>
              <td data-label='User ID'>{id}</td>
           </tr>
         </tbody>
     </Table>
   </Col>
);

export default User;
