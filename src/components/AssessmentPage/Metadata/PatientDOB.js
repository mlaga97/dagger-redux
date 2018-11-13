// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

// Helpers
import {oneYearAgo} from '../../../lib/date';

// TODO: Make controlled
// Minimum allowed patient age is 1 year old as of today
// TODO: MIN AND MAX SHOULD NOT BE HARDCODED! CHANGE TO BE CONFIGURABLE ASAP!
const PatientDOB = ({onChange}) => (
  <FocusableInput
    type='date'
    name='patientDOB'
    label='Patient DOB'
    required='required'
    onChange={onChange}
    max={oneYearAgo()}
    min='1900-01-01'
  />
);

export default PatientDOB;
