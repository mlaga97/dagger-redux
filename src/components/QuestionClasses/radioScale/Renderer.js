// Library imports
import React from 'react';
import { Radio } from 'react-bootstrap';

// Helper
import { convertIntoMultiColumnRenderer } from './helpers';

// Components
import RadioOptions from '../radioOptions';

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
      required,
      response,
    } = this.props;

    // TODO: Move to some kind of AssessmentClass-based preprocessor/postprocessor system
    const subTypes = convertIntoMultiColumnRenderer(this.props.options);

    // TODO: Actually handle multi-column, instead of just ignoring it.
    if (!editable) {
      return (
        <tr>
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
                  <React.Fragment>
                    <td>{number}. {text}</td>
                    <td>{option}</td>
                  </React.Fragment>
                );
              });
            })
          }
        </tr>
      );
    }

    // Fall back to radioOptions if on a mobile device
    // TODO: Better
    const isMobile = window.innerWidth <= 500;
    if (isMobile) {
      return <RadioOptions.renderer {...this.props} />;
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
                      required={(required) ? 'required' : null}
                    >
                      <hr /> {/* Sizable element to adjust vertical space between input and label text below */}
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
