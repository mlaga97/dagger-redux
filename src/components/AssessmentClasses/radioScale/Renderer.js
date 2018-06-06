// Library imports
import React from 'react';
import { Radio } from 'react-bootstrap';

function Renderer(props) {
  const {
    name,
    text,
    number,
  } = props;
  let { options } = props;

  // TODO: Move to some kind of AssessmentClass-based preprocessor/postprocessor system
  // Convert non-multicolumn format into multi-column format
  if (!Array.isArray(options)) {
    options = [{ options }];
  }

  return (
    <tr>
      <td>{number}. {text}</td>
      <React.Fragment>
        {
          options.map((subType) => {
            const { suffix, hideLabel } = subType;

            return Object.keys(subType.options).map((value, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={index}>
                <Radio name={name + ((suffix) || '')}>
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
