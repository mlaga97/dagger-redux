// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function Renderer(props) {
  const {
    name,
    text,
    number,
  } = props;

  return (
    <FormGroup>
      <ControlLabel>
        {number}. {text}
      </ControlLabel>
      <FormControl type="text" name={name} />
    </FormGroup>
  );
}

export default {
  renderer: Renderer,
};
