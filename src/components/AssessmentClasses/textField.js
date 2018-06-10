// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Renderer extends React.Component {
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
    } = this.props;

    return (
      <FormGroup>
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <FormControl type="text" name={name} onChange={this.handleChange} />
      </FormGroup>
    );
  }
}

export default {
  renderer: Renderer,
};
