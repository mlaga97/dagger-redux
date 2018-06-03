// Library imports
import React from 'react';
import { Radio } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const { type, index, question } = props;

  // Type Variables
  const { options } = type;

  // Question variables
  const { id, text } = question;

  // Check if single- or multi- column
  // TODO: Would it be better to split this up?
  if (typeof options[Object.keys(options)[1]] !== 'object') {
    const { hideLabel } = type;

    return (
      <tr>
        <td>
          {index}. {text}
        </td>
        <React.Fragment>
          {
            Object.keys(options).map((value, key) => (
              <td key={key}>
                <Radio name={id}>
                  {!hideLabel ? value : null}
                </Radio>
              </td>
            ))
          }
        </React.Fragment>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <React.Fragment>
        {
          props.type.options.map((subType) => {
            const { suffix, hideLabel } = subType;

            return Object.keys(subType.options).map((value, key) => (
              <td key={key}>
                <Radio name={id + ((suffix) || '')}>
                  {!hideLabel ? value : null}
                </Radio>
              </td>
            ));
          })
        }
      </React.Fragment>
    </tr>
  );
}

export default Renderer;
