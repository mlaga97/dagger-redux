// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const type = props.type;
  const question = props.question;
  const index = props.index;

  // Question variables
  const id = question.id;
  const text = question.text;

  // Type Variables
  const options = type.options;

  return (
    <tr>
      <td>
        {index}. {text}
      </td>
      {
				options.map((option, key) => (
  <td key={key}>
    <Checkbox name={`${id}-${key}`} value={Math.pow(2, key)} />
  </td>
				))
			}
    </tr>
  );
}

function Wrapper(props) {
  // Props
  const children = props.children;
  const type = props.type;

  // Type variables
  const options = type.options;

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Question</th>
          {
						options.map((option, key) => (
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
