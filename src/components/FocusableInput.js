// Library imports
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class FocusableInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
  }

  handleBlur = (event) => {
    this.setState({
      focused: false,
    });
  }

  handleFocus = (event) => {
    this.setState({
      focused: true,
    });
  }

  render = () => (
    <FormGroup controlId={this.props.controlId} className={(this.state.focused) ? 'focused' : 'blurred'} >
      <ControlLabel>{this.props.label}</ControlLabel>
      <FormControl name={this.props.name} type={this.props.type} onBlur={this.handleBlur} onFocus={this.handleFocus} />
    </FormGroup>
  )
}

export default FocusableInput;
