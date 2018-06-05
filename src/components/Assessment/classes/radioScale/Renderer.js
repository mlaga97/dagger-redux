// Library imports
import React from 'react';
import { Radio } from 'react-bootstrap';

function Renderer(props) {
  // Props
  const { type, index, question } = props;

  // Type Variables
  let { options } = type;

  // Question variables
  const { id, text } = question;

  // Convert non-multicolumn format into multi-column format
  if (!Array.isArray(options)) {
    options = [type];
  }

  return (
    <tr>
      <td>{index}. {text}</td>
      <React.Fragment>
        {
          options.map((subType) => {
            const { suffix, hideLabel } = subType;

            return Object.keys(subType.options).map((value, key) => (
              // eslint-disable-next-line react/no-array-index-key
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
