// Library imports
import React from 'react';
import { Table, Col, Checkbox } from 'react-bootstrap';

class Renderer extends React.Component {
  handleChange = (event) => {
    const { name, checked } = event.target;

    this.props.onUpdate({
      name,
      value: checked,
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

    const checked = response ? response[name] : false;

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
          <td>{(checked) ? 'Yes' : 'No'}</td>
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
                <label className='label-assessment-checkbox' htmlFor={name} >{text}</label>
              </div>
            </div>
          </div>
        </td>
        <td>
          <Checkbox
            name={name}
            id={name}
            checked={checked}
            onChange={this.handleChange}
          />
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
      <Table striped bordered condensed hover className={"table-assessment table-checkboxScale"} >
        <thead>
          <tr>
            <th>Question</th>
            <th />
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
