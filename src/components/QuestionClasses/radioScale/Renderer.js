// Library imports
import React from 'react';
import { Radio } from 'react-bootstrap';

// Helper
import { convertIntoMultiColumnRenderer } from './helpers';

class Renderer extends React.Component {
  handleChange = (event) => {
    const { name, value } = event.target;

    this.props.onUpdate({
      name,
      value,
    });
  }

  render() {
    const {
      text,
      number,
      editable,
      response,
    } = this.props;

    // TODO: Move to some kind of AssessmentClass-based preprocessor/postprocessor system
    const subTypes = convertIntoMultiColumnRenderer(this.props.options);

    // TODO: Actually handle multi-column, instead of just ignoring it.
    if (!editable) {
      return (
        <div>
          {
            subTypes.map((subType) => {
              const { suffix, options } = subType;
              const name = this.props.name + ((suffix) || '');
              const selected = response ? response[name] : null;

              return Object.keys(options).map((option) => {
                // TODO: Avoid type coercion by making type match at a higher level?
                const checked = String(options[option]) === String(selected);

                if (!checked) {
                  return null;
                }

                return (
                  <div>
                    <b>{number}. {text}:</b> {option}
                  </div>
                );
              });
            })
          }
        </div>
      );
    }

    return (
      <tr>
        <td>{number}. {text}</td>
        <React.Fragment>
          {
            subTypes.map((subType) => {
              const { suffix, hideLabel, options } = subType;
              const name = this.props.name + ((suffix) || '');
              const selected = response ? response[name] : null;

              return Object.keys(options).map((label, index) => {
                const value = options[label];

                // TODO: Avoid type coercion by making type match at a higher level?
                const checked = String(options[label]) === String(selected);

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={index}>
                    <Radio
                      name={name}
                      value={value}
                      checked={checked}
                      onChange={this.handleChange}
                    >
                      {!hideLabel ? label : null}
                    </Radio>
                  </td>
                );
              });
            })
          }
        </React.Fragment>
      </tr>
    );
  }
}

export default Renderer;
