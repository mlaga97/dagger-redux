// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
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

  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render = () => (
    <FormGroup className={(this.state.focused) ? 'focused' : 'blurred'} onClick={this.handleClick} >
      <ControlLabel>{this.props.label}</ControlLabel>
      <FormControl ref='inputNode' name={this.props.name} type={this.props.type} onBlur={this.handleBlur} onFocus={this.handleFocus} required={this.props.required} />
    </FormGroup>
  )
}

export default FocusableInput;
