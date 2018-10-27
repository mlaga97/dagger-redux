// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

const AssessmentDate = ({metadata}) => {
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
      onChange={this.handleChange}
    />
  );
}

export default AssessmentDate;
