// Library imports
import React from 'react';

// Components
import FocusableInput from '../../FocusableInput';

// TODO: Use server Date
let getMaxYesterday = function() {
   let d = new Date();
   d.setDate(d.getDate() - 1);
   return d.toLocaleDateString('en-CA');
};

let getMinOneYearAgo = function() {
   let y = new Date();
   y.setFullYear(y.getFullYear() - 1);
   return y.toLocaleDateString('en-CA');
};

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
      max={getMaxYesterday()}
      min={getMinOneYearAgo()}
    />
  );
}

export default AssessmentDate;
