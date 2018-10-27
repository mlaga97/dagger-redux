// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Col, FormGroup, ControlLabel, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class Renderer extends React.Component {
  // Apparently ToggleButtonGroup doesn't behave like a normal form element?
  handleChange = (value) => {
    this.props.onUpdate({
      name: this.props.name,
      value,
    });
  }

  handleClick = (event) => {
    ReactDOM.findDOMNode(this.refs.inputNode).focus();
  };

  render() {
    const {
      name,
      text,
      width,
      number,
      editable,
      response,
    } = this.props;

    const value = response ? response[name] : '';

    if (!editable) {
      return (
        <Col sm={width || 4}>
          <div className='info-group'>
            <label className='info-label'>{number}. {text}</label>
            <div className='info-content'>{{'yes': 'Yes', 'no': 'No'}[value]}</div>
          </div>
        </Col>
      );
    }

    return (
      <Col sm={width || 4}>
        <FormGroup onClick={this.handleClick}>
          <ControlLabel>
            {number}. {text}
          </ControlLabel>
          <ToggleButtonGroup
            name={name}
            type='radio'
            ref='inputNode'
            required='required'
            onChange={this.handleChange}
          >
            <ToggleButton value='yes'>Yes</ToggleButton>
            <ToggleButton value='no'>No</ToggleButton>
          </ToggleButtonGroup>
        </FormGroup>
      </Col>
    );
  }
}

export default {
  renderer: Renderer,
  wrapper: (props) => (<React.Fragment>{props.children}</React.Fragment>),
};
