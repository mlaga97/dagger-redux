// Library imports
import React from 'react';
import { FormGroup, ControlLabel, Radio } from 'react-bootstrap';

// Helpers
const questionStyle = {
  paddingLeft: '20px',
};

function renderer(props) {
  const {
    name,
    text,
    number,
    options,
  } = props;

  return (
    <FormGroup>
      <ControlLabel>
        {number}. {text}
      </ControlLabel>
      <div style={questionStyle}>
        {
          Object.keys(options).map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Radio key={index} value={options[option]} name={name}>
              {option}
            </Radio>
          ))
        }
      </div>
    </FormGroup>
  );
}

export default {
  renderer,
};
