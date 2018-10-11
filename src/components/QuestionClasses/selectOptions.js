// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Helpers
const questionStyle = {
  paddingLeft: '20px',
};

class renderer extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.onUpdate({
      name,
      value,
    });
  }

  render() {
    const {
      name,
      text,
      number,
      options,
      editable,
      response,
    } = this.props;

    const selected = response ? response[name] : null;

    if (!editable) {
      return (
        <div>
          {
            Object.keys(options).map((option) => {
              // TODO: Avoid type coercion by making type match at a higher level?
              const selected = String(options[option]) === String(selected);

              if (selected) {
                return (
                  <div>
                    <b>{number}. {text}:</b> {option}
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
      <FormGroup>
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <FormControl componentClass='select' name={name} value={selected} onChange={this.handleChange}>
          <option value selected disabled hidden>- Select -</option>
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
