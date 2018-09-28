// Library imports
import React from 'react';
import classes from '../../../QuestionClasses';
import { Col } from 'react-bootstrap';

function getWrapper(typeClass) {
  if (classes[typeClass] && classes[typeClass].wrapper) {
    return classes[typeClass].wrapper;
  }

  // Return default wrapper
  return props => <Col sm={4}>
    {props.children}
  </Col>
}

export default getWrapper;
