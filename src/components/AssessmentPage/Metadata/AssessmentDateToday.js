// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

let formatDate = function(input) {
  let pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

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
        // en-CA is the equivalent of ISO-8601
        value: (value === 'true') ? formatDate(new Date()) : null,
      }
    });
  }

  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render = () => (
    <FormGroup  onClick={this.handleClick}>
      <ControlLabel>Assessment Date Today</ControlLabel>
      <ToggleButtonGroup
        type='radio'
        required='required'
        defaultValue='true'
        name='assessmentDateToday'
        onChange={this.handleChange}
      >
        <ToggleButton value='true' ref='inputNode'>Yes</ToggleButton>
        <ToggleButton value='false'>No</ToggleButton>
      </ToggleButtonGroup>
      <span className="info-content"> {(new Date()).toLocaleDateString('en-US')} </span>
    </FormGroup>
  )
}

export default AssessmentDateToday;
