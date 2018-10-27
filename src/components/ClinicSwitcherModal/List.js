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
    <td>
      <Radio
        readOnly
        name='clinic'
        value={clinic.id}
        checked={checked}
        onClick={handleClick}
      />
    </td>
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
          return (
            <Clinic
              key={clinicID}
              handleClick={handleClick}
              clinic={clinics[clinicID]}
              checked={clinicID === currentClinic}
            />
          )
        })
      }
    </tbody>
  </Table>
)

export default List;
