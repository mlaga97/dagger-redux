// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Col, FormGroup, ControlLabel, FormControl, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

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
          <ToggleButtonGroup ref='inputNode' name={name} type='radio' required='required' onChange={
            (value) => {
              // Apparently ToggleButtonGroup doesn't behave like a normal form element?
              this.handleChange({
                target: {
                  name,
                  value,
                }
              });
            }
          } >
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
