// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const { index, question } = props;

  // Question variables
  const { id, text } = question;

  return (
    <tr>
      <td>
        {index}. {text}
      </td>
      <td>
        <Checkbox name={id} value={1} />
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
