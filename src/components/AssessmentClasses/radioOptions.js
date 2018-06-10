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
    } = this.props;

    return (
      <FormGroup>
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <div style={questionStyle}>
          {
            Object.keys(options).map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Radio key={index} value={options[option]} name={name} onChange={this.handleChange}>
                {option}
              </Radio>
            ))
          }
        </div>
      </FormGroup>
    );
  }
}

export default {
  renderer,
};
