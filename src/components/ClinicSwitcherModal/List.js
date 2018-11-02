// Library imports
import React from 'react';
import { Table, Radio } from 'react-bootstrap';

// Styling
import '../../style/dagger.css';

const Header = () => (
  <tr>
    <th></th>
    <th>Name</th>
    <th>City</th>
    <th>State</th>
  </tr>
);

const Clinic = ({clinic, handleClick, checked}) => (
  <tr key={clinic.id}>
    <td data-label='Select'>
      <Radio
        readOnly
        name='clinic'
        value={clinic.id}
        checked={checked}
        onClick={handleClick}
      />
    </td>
    <td data-label='Name'>{clinic.name}</td>
    <td data-label='City'>{clinic.city}</td>
    <td data-label='State'>{clinic.state}</td>
  </tr>
);

// TODO: Merge with ClinicList/List
const List = ({clinics, handleClick, currentClinic}) => (
  <Table striped className='table-select-clinic table-card-table'>
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
