// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Table, Radio } from 'react-bootstrap';

// Styling
import '../../style/dagger.css';

// Actions
import actions from '../../actions';

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
    <td><Radio name='clinic' value={clinic.id} onClick={handleClick} checked={checked} /></td>
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
          if (clinicID == currentClinic) {
            return <Clinic clinic={clinics[clinicID]} handleClick={handleClick} checked='checked' />
          } else {
            return <Clinic clinic={clinics[clinicID]} handleClick={handleClick} />
          }
        })
      }
    </tbody>
  </Table>
)

export default List;
