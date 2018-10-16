// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class FocusableInput extends React.Component {
  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render = () => (
    <FormGroup onClick={this.handleClick} >
      <ControlLabel>{this.props.label}</ControlLabel>
      <FormControl ref='inputNode' name={this.props.name} componentClass={this.props.componentClass} type={this.props.type} required={this.props.required} autoFocus={this.props.autoFocus} onChange={this.props.onChange}>
        {this.props.children}
      </FormControl>
    </FormGroup>
  )
}

export default FocusableInput;
