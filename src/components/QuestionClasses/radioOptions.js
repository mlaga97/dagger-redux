// Library imports
import React from 'react';
import { FormGroup, Radio, Grid, Row } from 'react-bootstrap';

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
      type,
      number,
      editable,
      required,
      response,
    } = this.props;
    const { options } = type;

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
                      <div className="list-style">
                        <div className="list-style-item">
                          <div className="list-style-item-ordinal info-label">{number}.</div>
                          <div className="list-style-item-content info-label">{text}</div>
                        </div>
                      </div>
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
        <div className="list-style">
          <div className="list-style-item">
            <div className="list-style-item-ordinal">
              <label>{number}.</label>
            </div>
            <div className="list-style-item-content">
              <label>{text}</label>
            </div>
          </div>
        </div>
        <div className="radio-options">
          {
            Object.keys(options).map((option, index) => {
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
                  ref={(index === 0) ? 'inputNode' : null}
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
