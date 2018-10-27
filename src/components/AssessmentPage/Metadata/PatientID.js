// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

// TODO: Make controlled
const PatientID = ({onChange}) => (
  <FocusableInput
    autoFocus
    type='text'
    name="patientID"
    label='Patient ID'
    autoComplete='off'
    required='required'
    onChange={onChange}
  />
);

export default PatientID;
