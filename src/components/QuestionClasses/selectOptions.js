// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class renderer extends React.Component {
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
      options,
      editable,
      required,
      response,
    } = this.props;

    const selected = response ? response[name] : null;

    if (!editable) {
      return (
        <div>
          {
            Object.keys(options).map((option) => {
              // TODO: Avoid type coercion by making type match at a higher level?
              if (String(options[option]) === String(selected)) {
                return (
                  <div className='info-group'>
                    <label className='info-label'>{number}. {text}</label>
                    <div className='info-content'>{option}</div>
                  </div>
                );
              }

              return null;
            })
          }
        </div>
      );
    }

    return (
      <FormGroup onClick={this.handleClick} >
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <FormControl
          ref='inputNode'
          componentClass='select'
          name={name}
          value={selected || ''}
          onChange={this.handleChange}
          required={(required) ? 'required' : null}
        >
          <option value='' disabled hidden>- Select -</option>
          {
            Object.keys(options).map((option) => {
              const value = options[option];

              return (
                <option
                  value={value}
                  key={[name, value].join('_')} 
                >
                  {option}
                </option>
              );
            })
          }
        </FormControl>
      </FormGroup>
    );
  }
}

export default {
  renderer,
};
