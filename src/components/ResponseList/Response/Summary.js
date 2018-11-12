// Library imports
import React from 'react';
import { Link } from 'react-router-dom';

let formatDate = function(input) {
  let pattern = /(d{4})-(d{2})-(d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

const Summary = ({
  metadata: {
    id,
    user,
    visit,
    clinic,
    patient,
    dateSubmitted,
  },
}) => (
  <React.Fragment>
    <td>
      <Link to={`/response/${id}`} className={'btn-sm'} >View</Link>
    </td>
    <td data-label='Date Submitted'>{formatDate(dateSubmitted.split(' ')[0])}</td>
    <td data-label='Visit Date'>{formatDate(visit.date)}</td>
    <td data-label='User ID'>{user.id}</td>
    <td data-label='Clinic ID'>{clinic.id}</td>
    {/*<td>{patient.id}</td>*/}
    {/*<td>{patient.dob}</td>*/}
  </React.Fragment>
);

export default Summary;
