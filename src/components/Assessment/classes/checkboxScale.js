// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const question = props.question;
  const index = props.index;

  // Question variables
  const id = question.id;
  const text = question.text;

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
  const children = props.children;

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
