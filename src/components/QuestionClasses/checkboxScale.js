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
        <div>
          <b>{number}. {text}:</b> {(checked) ? 'yes' : 'no'}
        </div>
      );
    }

    return (
      <tr>
        <td>
          {number}. {text}
        </td>
        <td>
          <Checkbox
            name={name}
            checked={checked}
            onChange={this.handleChange}
          />
        </td>
      </tr>
    );
  }
}

function Wrapper(props) {
  const { children } = props;

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
