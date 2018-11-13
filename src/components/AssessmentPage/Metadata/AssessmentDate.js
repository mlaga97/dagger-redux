// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

// Helpers
import {yesterday, oneYearAgo} from '../../../lib/date';

// TODO: MIN AND MAX SHOULD NOT BE HARDCODED! CHANGE TO BE CONFIGURABLE ASAP!
const AssessmentDate = ({metadata, onChange}) => {
  if (metadata && metadata.assessmentDateToday === 'true') {
    return null;
  }

  return (
    <FocusableInput
      autoFocus
      type='date'
      required='required'
      name='assessmentDate'
      label='Assessment Date'
      onChange={onChange}
      max={yesterday()}
      min={oneYearAgo()}
    />
  );
}

export default AssessmentDate;
