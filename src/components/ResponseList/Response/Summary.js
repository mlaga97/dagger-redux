// Library imports
import React from 'react';
import { Link } from 'react-router-dom';

const Summary = ({
  metadata: {
    id, dateSubmitted, visit, user, clinic, patient,
  },
}) => (
  <React.Fragment>
    <td>
      <Link to={`/response/${id}`}>{id}</Link>
    </td>
    <td>{dateSubmitted}</td>
    <td>{visit.date}</td>
    <td>{user.id}</td>
    <td>{clinic.id}</td>
    <td>{patient.id}</td>
    <td>{patient.dob}</td>
  </React.Fragment>
);

export default Summary;
