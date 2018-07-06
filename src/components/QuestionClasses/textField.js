// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// TODO: This component is only dubiously controlled, and that should be fixed.
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
      editable,
      response,
    } = this.props;

    const value = response ? response[name] : '';

    if(!editable) {
      return (
        <div>
          <b>{number}. {text}:</b> {value}
        </div>
      );
    }

    return (
      <FormGroup>
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <FormControl
          type="input"
          name={name}
          defaultValue={value}
          onBlur={this.handleChange}
        />
      </FormGroup>
    );
  }
}

export default {
  renderer: Renderer,
};
