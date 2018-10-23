// Library imports
import React from 'react';

// Components
import FocusableInput from '../FocusableInput';

const Password = () => (
  <FocusableInput
    type='password'
    name='password'
    label='Password'
    required='required'
    controlID='formLoginPassword'
  />
);

export default Password;
