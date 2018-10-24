// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// TODO: This component is only dubiously controlled, and that should be fixed.
class Renderer extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.onUpdate({
      name,
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
      required,
      response,
    } = this.props;

    const value = response ? response[name] : '';

    if (!editable) {
      return (
        <Col sm={width || 4}>
          <div className='info-group'>
            <label className='info-label'>{number}. {text}</label>
            <div className='info-content'>{value}</div>
          </div>
        </Col>
      );
    }

    return (
      <Col sm={width || 4}>
        <FormGroup onClick={this.handleClick} >
          <ControlLabel>
            {number}. {text}
          </ControlLabel>
          <FormControl
            type="input"
            name={name}
            ref='inputNode'
            defaultValue={value}
            onBlur={this.handleChange}
            required={(required) ? 'required' : null}
            autoComplete='off'
          />
        </FormGroup>
      </Col>
    );
  }
}

export default {
  renderer: Renderer,
  wrapper: (props) => (<React.Fragment>{props.children}</React.Fragment>),
};
