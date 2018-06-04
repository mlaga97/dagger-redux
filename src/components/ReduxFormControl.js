// Library imports
import React from 'react';
import { FormControl } from 'react-bootstrap';

function ReduxFormControl({ input, meta, ...props }) {
  return <FormControl {...props} {...input} />;
}

export default ReduxFormControl;
