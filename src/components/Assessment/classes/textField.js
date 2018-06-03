// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const { index, question } = props;

  // Question variables
  const { id, text } = question;

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
