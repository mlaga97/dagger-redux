// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const question = props.question;
  const index = props.index;

  // Question variables
  const id = question.id;
  const text = question.text;

  return (
    <FormGroup>
      <ControlLabel>
        {index}. {text}
      </ControlLabel>
      <FormControl type="text" name={id} />
    </FormGroup>
  );
}

export default {
  renderer: Renderer,
};
