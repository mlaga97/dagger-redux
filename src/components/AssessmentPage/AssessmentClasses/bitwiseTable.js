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
      options,
    } = this.props;

    return (
      <tr>
        <td>
          {number}. {text}
        </td>
        {
          options.map((option, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <td key={index}>
              <Checkbox name={`${name}-${index}`} value={2 ** index} onChange={this.handleChange} />
            </td>
          ))
        }
      </tr>
    );
  }
}

function Wrapper(props) {
  const { type, children } = props;
  const { options } = type;

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Question</th>
          {
            options.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <th key={index}>{option}</th>
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