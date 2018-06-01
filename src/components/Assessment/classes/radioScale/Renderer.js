// Library imports
import React from 'react';
import { Radio } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const type = props.type;
  const question = props.question;
  const index = props.index;

  // Type Variables
  const options = type.options;

  // Question variables
  const id = question.id;
  const text = question.text;

  // Check if single- or multi- column
  // TODO: Would it be better to split this up?
  if (typeof options[Object.keys(options)[1]] !== 'object') {
    const hideLabel = type.hideLabel;

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
							const suffix = subType.suffix;
							const options = subType.options;
							const hideLabel = subType.hideLabel;

							return Object.keys(options).map((value, key) => (
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
