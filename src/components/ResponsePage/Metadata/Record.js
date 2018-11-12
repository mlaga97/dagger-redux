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

const Record = ({
  visit,
  dateSubmitted,
}) => (
   <Col sm={6}>
     <Table striped bordered className='table-response table-vertical'>
         <thead>
           <tr>
              <th colSpan='2'>
                 Record Overview
              </th>
           </tr>
         </thead>
         <tbody>
           <tr>
              <th>Assessment Performed</th>
              <td data-label='Assessment Performed'>{formatDate(visit.date)}</td>
           </tr>
           <tr>
              <th>Assessment Recorded</th>
              <td data-label='Assessment Recorded'>{formatDate(dateSubmitted.split(' ')[0])}</td>
           </tr>
         </tbody>
     </Table>
   </Col>
);

export default Record;
