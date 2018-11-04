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
          <td>{number}. {text}</td>
          <td>{(checked) ? 'Yes' : 'No'}</td>
        </tr>
      );
    }

    return (
      <tr>
        <td>
          <label class='label-assessment-checkbox' for={name} >{number}. {text}</label>
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
      <Table striped bordered condensed hover className={"table-assessment"} >
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
