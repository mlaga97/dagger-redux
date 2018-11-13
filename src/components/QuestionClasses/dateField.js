// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Helpers
import {formatDate, today, oneYearAgoPlusOneDay} from '../../lib/date';

// TODO: This component is only dubiously controlled, and that should be fixed.
// TODO: MIN AND MAX SHOULD NOT BE HARDCODED! CHANGE TO BE CONFIGURABLE ASAP!
class Renderer extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.onUpdate({
      name,
      value,
    });
  }

  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render() {
    const {
      name,
      text,
      number,
      editable,
      required,
      response,
    } = this.props;

    const value = response ? response[name] : '';

    if (!editable) {
      return (
        <div className='info-group'>
          <label className='info-label'>{number}. {text}</label>
          <div className='info-content'>{formatDate(value)}</div>
        </div>
      );
    }

    return (
      <FormGroup onClick={this.handleClick} >
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <FormControl
          type='date'
          name={name}
          ref='inputNode'
          defaultValue={value}
          onBlur={this.handleChange}
          required={(required) ? 'required' : null}
          max={today}
          min={oneYearAgoPlusOneDay}
        />
      </FormGroup>
    );
  }
}

export default {
  renderer: Renderer,
};
