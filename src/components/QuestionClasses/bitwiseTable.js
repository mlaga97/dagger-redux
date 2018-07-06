// Library imports
import React from 'react';
import { Table, Checkbox } from 'react-bootstrap';

// TODO: Surely there is a better way to store this in the json...
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
      text,
      number,
      options,
      editable,
      response,
    } = this.props;

    if(!editable) {
      return (
        <div>
          <b>{number}. {text}:</b> {
            options.filter((option, index) => {
              const name = `${this.props.name}-${index}`;
              const checked = response ? response[name] : false;

              if(checked === true) {
                return option
              }
            }).join(', ')
          }
        </div>
      );
    }

    return (
      <tr>
        <td>
          {number}. {text}
        </td>
        {
          options.map((option, index) => {
            const name = `${this.props.name}-${index}`;
            const value = 2 ** index;

            const checked = response ? response[name] : false;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <td key={index}>
                <Checkbox
                  name={name}
                  value={value}
                  checked={checked}
                  onChange={this.handleChange}
                />
              </td>
            );
          })
        }
      </tr>
    );
  }
}

function Wrapper(props) {
  const { type, children, editable } = props;
  const { options } = type;

  if(!editable) {
    return <React.Fragment>{children}</React.Fragment>;
  }

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
