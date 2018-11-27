// Library imports
import React from 'react';
import { Col } from 'react-bootstrap';

// Components
import FocusableInput from '../../FocusableInput';

// Helpers
import {today, oneYearAgoPlusOneDay} from '../../../lib/date';

// TODO: MIN AND MAX VALUES SHOULD NOT BE HARDCODED! CHANGE TO BE CONFIGURABLE ASAP!
const SortDate = ({
  name,
  children,
}) => (
  <Col sm={4}>
    <FocusableInput
      type='date'
      name={name}
      label={children}
      max={today()}
      min={oneYearAgoPlusOneDay()}
    />
  </Col>
);

export default SortDate;
