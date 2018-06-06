// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

function Renderer(props) {
  const {
    name,
    text,
    number,
  } = props;

  return (
    <tr>
      <td>
        {number}. {text}
      </td>
      <td>
        <Checkbox name={name} />
      </td>
    </tr>
  );
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
