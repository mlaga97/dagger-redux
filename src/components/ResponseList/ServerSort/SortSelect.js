// Library imports
import React from 'react';
import { Col } from 'react-bootstrap';

// Components
import FocusableInput from '../../FocusableInput';

const SortSelect = ({
  name,
  label,
  children,
}) => (
  <Col sm={4}>
    <FocusableInput componentClass='select' name={name} label={label}>
      <option />
      {children}
    </FocusableInput>
  </Col>
);

export default SortSelect;
