// Library imports
import React from 'react';

// Components
import FocusableInput from '../FocusableInput';

const Username = () => (
  <FocusableInput
    type='text'
    name='username'
    label='Username'
    required='required'
    autoFocus='autofocus'
    controlID='formLoginUsername'
  />
);

export default Username;
