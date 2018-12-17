// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Col } from 'react-bootstrap';

class Renderer extends React.Component {
  handleInput = (event) => {
    const { name, value, classList } = event.target;

    this.props.onUpdate({
      name,
      value,
    });

    if(parseFloat(value) === (this.props.min - this.props.step)) {
      ReactDOM.findDOMNode(this.refs.ouputNode).value = '';
      classList.add('no-response');
    } else {
      ReactDOM.findDOMNode(this.refs.ouputNode).value = value;
      classList.remove('no-response');
    }
  }

  render() {
    const {
      name,
      min,
      max,
      step,
      text,
      type,
      number,
      editable,
      response,
    } = this.props;
    const { options } = type;

    const value = response ? response[name] : '';

    if (!editable) {
      return (
        <tr>
          <td>
            <div className="list-style">
              <div className="list-style-item">
                <div className="list-style-item-ordinal">{number}.</div>
                <div className="list-style-item-content">{text}</div>
              </div>
            </div>
          </td>
          <td>{parseFloat(value) >= min ? value : 'NR'}</td>
        </tr>
      );
    }

    return (
      <tr>
        <td>
          <div className="list-style">
            <div className="list-style-item">
              <div className="list-style-item-ordinal">
                {number}.
              </div>
              <div className="list-style-item-content">
                {text}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="range-group-container">
            <div className="range-input-and-options-container">
              <div className="range-input-container">
                <input
                  name={name}
                  id={name}
                  ref="inputNode"
                  className="range-input no-response"
                  type="range"
                  defaultValue={min-step}
                  min={min-step}
                  max={max}
                  step={step}
                  list={name.concat("_labels")}
                  onInput={this.handleInput}
                />
              </div>
              <datalist className="range-list" id={name.concat("_labels")} >
                <option className="range-opt" value={min-step} >NR</option>
                {
                  Object.keys(options).map((option) => {
                    const value = options[option];

                    return (
                      <option
                        className="range-opt"
                        value={value}
                        key={[name, value].join('_')}
                      >
                        {option}
                      </option>
                    );
                  })
                }
              </datalist>
            </div>
            <output id={name.concat("_output")} ref='ouputNode' className="range-output"></output>
          </div>
        </td>
      </tr>
    );
  }
}

function Wrapper(props) {
  const { children, editable } = props;

  if (!editable) {
    return (
      <Col sm={12}>
        <Table striped bordered className={"table-response"} >
          <thead>
            <tr>
              <th>Question</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </Table>
      </Col>
    );
  }

  return (
    <Col sm={12}>
      <Table striped bordered condensed hover className={"table-assessment table-range table-card-table"} >
        <thead>
          <tr>
            <th>Question</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Table>
    </Col>
  );
}

export default {
  renderer: Renderer,
  wrapper: Wrapper,
};
