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
      name,
      text,
      number,
    } = this.props;

    // TODO: Move to some kind of AssessmentClass-based preprocessor/postprocessor system
    const options = convertIntoMultiColumnRenderer(this.props.options);

    return (
      <tr>
        <td>{number}. {text}</td>
        <React.Fragment>
          {
            options.map((subType) => {
              const { suffix, hideLabel } = subType;

              return Object.keys(subType.options).map((label, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={index}>
                  <Radio name={name + ((suffix) || '')} value={subType.options[label]} onChange={this.handleChange} >
                    {!hideLabel ? label : null}
                  </Radio>
                </td>
              ));
            })
          }
        </React.Fragment>
      </tr>
    );
  }
}

export default Renderer;
