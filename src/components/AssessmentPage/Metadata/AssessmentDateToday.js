// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, FormGroup, ControlLabel, Grid, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// Components
import FocusableInput from '../../FocusableInput';
import YesNoToggle from '../../QuestionClasses/yesNoToggle';

// TODO: Refactor
// TODO: Make Controlled
class AssessmentDateToday extends React.Component {
  // ToggleButtonGroup is "special" and emits the value without the event itself
  handleChange = (value) => {
    this.props.onChange({
      target: {
        name: 'assessmentDateToday',
        value,
      }
    })

    this.props.onChange({
      target: {
        name: 'assessmentDate',
        value: (value === 'true') ? (new Date()).toLocaleDateString('en-CA') : null, // TODO: Not this.
      }
    });
  }

  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render = () => (
    <FormGroup  onClick={this.handleClick}>
      <ControlLabel>Assessment Date Today</ControlLabel>
      <ToggleButtonGroup ref='inputNode' name='assessmentDateToday' type='radio' required='required' defaultValue='true' onChange={this.handleChange} >
        <ToggleButton value='true'>Yes</ToggleButton>
        <ToggleButton value='false'>No</ToggleButton>
      </ToggleButtonGroup>
      <span className="info-content"> {(new Date()).toLocaleDateString('en-US')} </span>
    </FormGroup>
  )
}

export default AssessmentDateToday;
