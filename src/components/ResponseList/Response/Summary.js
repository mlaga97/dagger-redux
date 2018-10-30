// Library imports
import React from 'react';
import { Link } from 'react-router-dom';

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
    <td>{dateSubmitted.split(' ')[0]}</td>
    <td>{visit.date}</td>
    <td>{user.id}</td>
    <td>{clinic.id}</td>
    {/*<td>{patient.id}</td>*/}
    {/*<td>{patient.dob}</td>*/}
  </React.Fragment>
);

export default Summary;
