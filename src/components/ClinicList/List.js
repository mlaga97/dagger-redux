// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Header = () => (
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>City</th>
    <th>State</th>
  </tr>
);

const Clinic = ({clinic}) => (
  <tr key={clinic.id}>
    <td>
      <Link to={`/clinic/${clinic.id}`}>{clinic.id}</Link>
    </td>
    <td>{clinic.name}</td>
    <td>{clinic.city}</td>
    <td>{clinic.state}</td>
  </tr>
);

const List = ({clinics}) => (
  <Table>
    <thead>
      <Header/>
    </thead>
    <tbody>
      {
        Object.keys(clinics).map((clinicID) => (
          <Clinic clinic={clinics[clinicID]}/>
        ))
      }
    </tbody>
  </Table>
)

export default List;
