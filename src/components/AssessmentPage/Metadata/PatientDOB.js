// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

// TODO: Make controlled
const PatientDOB = ({onChange}) => (
  <FocusableInput
    type='date'
    name='patientDOB'
    label='Patient DOB'
    required='required'
    onChange={onChange}
  />
);

export default PatientDOB;
