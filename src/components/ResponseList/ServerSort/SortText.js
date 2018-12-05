// Library imports
import React from 'react';
import { Col } from 'react-bootstrap';

// Components
import FocusableInput from '../../FocusableInput';

const SortText = ({
  name,
  label
}) => (
  <Col sm={4}>
    <FocusableInput
      autoFocus
      type='text'
      name={name}
      label={label}
      autoComplete='off'
    />
  </Col>
);

export default SortText;
