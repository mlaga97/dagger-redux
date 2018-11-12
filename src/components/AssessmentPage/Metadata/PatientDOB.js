// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

// Minimum allowed patient age is 1 year old as of today
let getMaxOneYearAgo = function() {
   let y = new Date();
   y.setFullYear(y.getFullYear() - 1);
   return y.toLocaleDateString('en-CA');
};

// TODO: Make controlled
const PatientDOB = ({onChange}) => (
  <FocusableInput
    type='date'
    name='patientDOB'
    label='Patient DOB'
    required='required'
    onChange={onChange}
    max={getMaxOneYearAgo()}
    min='1900-01-01'
  />
);

export default PatientDOB;
