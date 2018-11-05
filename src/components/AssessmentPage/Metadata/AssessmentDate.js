// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

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
    />
  );
}

export default AssessmentDate;
