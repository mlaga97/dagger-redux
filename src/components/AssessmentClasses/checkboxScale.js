// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

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
    } = this.props;

    return (
      <tr>
        <td>
          {number}. {text}
        </td>
        <td>
          <Checkbox name={name} onChange={this.handleChange} />
        </td>
      </tr>
    );
  }
}

function Wrapper(props) {
  const { children } = props;

  return (
    <Table striped bordered condensed hover>
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
  );
}

export default {
  renderer: Renderer,
  wrapper: Wrapper,
};
