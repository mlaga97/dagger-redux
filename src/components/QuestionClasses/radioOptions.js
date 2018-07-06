// Library imports
import React from 'react';
import { FormGroup, ControlLabel, Radio } from 'react-bootstrap';

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

    if(!editable) {
      return (
        <div>
          {
            Object.keys(options).map((option, index) => {
              if(String(options[option]) == selected) {
                return (
                  <div>
                    <b>{number}. {text}:</b> {option}
                  </div>
                );
              }
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
        <div style={questionStyle}>
          {
            Object.keys(options).map((option, index) => {
              const value = options[option];

              // TODO: Avoid type coercion by making type match at a higher level?
              const checked = (options[option] == selected);

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Radio
                  key={index}
                  name={name}
                  value={value}
                  checked={checked}
                  onChange={this.handleChange}
                >
                  {option}
                </Radio>
              );
            })
          }
        </div>
      </FormGroup>
    );
  }
}

export default {
  renderer,
};
