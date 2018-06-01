// Library imports
import React from 'react';
import { FormGroup, ControlLabel, Radio } from 'react-bootstrap';

// Helpers
const questionStyle = {
  paddingLeft: '20px',
};

function renderer(props) {
  // Props
  const type = props.type;
  const question = props.question;
  const index = props.index;

  // Type Variables
  const options = type.options;

  // Question Variables
  const id = question.id;
  const text = question.text;

  return (
    <FormGroup>
      <ControlLabel>
        {index}. {text}
      </ControlLabel>
      <div style={questionStyle}>
        {
					Object.keys(options).map((option, key) => (
  <Radio key={key} value={options[option]} name={id}>
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
