// Library imports
import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const LoginButton = () => (
  <FormGroup controlId='formLoginSubmit' className='form-group-clear-style'>
    <FormControl type='submit' name='Login' value='Login' />
  </FormGroup>
)

export default LoginButton;
