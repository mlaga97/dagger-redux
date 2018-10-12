// Library imports
import React from 'react';
import { Table, Radio } from 'react-bootstrap';

// Styling
import '../../style/dagger.css';

const Header = () => (
  <tr>
    <th></th>
    <th>ID</th>
    <th>Name</th>
    <th>City</th>
    <th>State</th>
  </tr>
);

const Clinic = ({clinic, handleClick, checked}) => (
  <tr key={clinic.id}>
    <td><Radio name='clinic' value={clinic.id} onClick={handleClick} readOnly checked={checked} /></td>
    <td>{clinic.id}</td>
    <td>{clinic.name}</td>
    <td>{clinic.city}</td>
    <td>{clinic.state}</td>
  </tr>
);

// TODO: Merge with ClinicList/List
const List = ({clinics, handleClick, currentClinic}) => (
  <Table>
    <thead>
      <Header/>
    </thead>
    <tbody>
      {
        Object.keys(clinics).map((clinicID) => {
          return <Clinic key={clinicID} clinic={clinics[clinicID]} handleClick={handleClick} checked={clinicID === currentClinic} />
        })
      }
    </tbody>
  </Table>
)

export default List;
