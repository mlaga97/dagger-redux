// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const { type, index, question } = props;

  // Question variables
  const { id, text } = question;

  // Type Variables
  const { options } = type;

  return (
    <tr>
      <td>
        {index}. {text}
      </td>
      {
        options.map((option, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <td key={key}>
            <Checkbox name={`${id}-${key}`} value={2 ** key} />
          </td>
        ))
      }
    </tr>
  );
}

function Wrapper(props) {
  // Props
  const { type, children } = props;

  // Type variables
  const { options } = type;

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Question</th>
          {
            options.map((option, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <th key={key}>{option}</th>
            ))
          }
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
