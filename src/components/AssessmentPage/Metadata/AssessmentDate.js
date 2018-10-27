// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, FormGroup, ControlLabel, Grid, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// Components
import FocusableInput from '../../FocusableInput';
import YesNoToggle from '../../QuestionClasses/yesNoToggle';

const AssessmentDate = ({metadata}) => {
  if (metadata && metadata.assessmentDateToday == 'true') {
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
