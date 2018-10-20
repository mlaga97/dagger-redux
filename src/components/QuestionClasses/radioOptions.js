// Library imports
import React from 'react';
import { FormGroup, ControlLabel, Radio, Grid, Row } from 'react-bootstrap';

// Helpers
const questionStyle = {
  paddingLeft: '20px',
};

class renderer extends React.Component {
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
      options,
      editable,
      required,
      response,
    } = this.props;

    const selected = response ? response[name] : null;

    if (!editable) {
      return (
        <Grid>
          <Row>
            {
              Object.keys(options).map((option) => {
                // TODO: Avoid type coercion by making type match at a higher level?
                const checked = String(options[option]) === String(selected);

                if (checked) {
                  return (
                    <div className='info-group'>
                      <label className='info-label'>{number}. {text}</label>
                      <div className='info-content'>{option}</div>
                    </div>
                  );
                }

                return null;
              })
            }
          </Row>
        </Grid>
      );
    }

    return (
      <FormGroup>
        <ControlLabel>
          {number}. {text}
        </ControlLabel>
        <div style={questionStyle}>
          {
            Object.keys(options).map((option) => {
              const value = options[option];

              // TODO: Avoid type coercion by making type match at a higher level?
              const checked = String(options[option]) === String(selected);

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Radio
                  name={name}
                  value={value}
                  key={[name, value].join('_')}
                  checked={checked}
                  onChange={this.handleChange}
                  required={(required) ? 'required' : null}
                >
                  {option}
                </Radio>
              );
            })
          }
        </div>
      </FormGroup>
    );
  }
}

export default {
  renderer,
};
