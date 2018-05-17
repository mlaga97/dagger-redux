// Library imports
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, ControlLabel, Button} from 'react-bootstrap';

// Components
import ReduxFormControl from './ReduxFormControl';

// Actions
import {AUTH_LOGIN_REQUESTED} from '../actions/allActions';

function LoginForm(props) {
	return(
		<form onSubmit={props.handleSubmit}>
			<FormGroup>
				<ControlLabel>Login</ControlLabel>
				<Field component={ReduxFormControl} name='username' type='text' />
				<Field component={ReduxFormControl} name='password' type='password' />
			</FormGroup>
			<Button type='submit'>Submit</Button>
		</form>
	)
}

// Redux Form Decorator
export default reduxForm({
	form: 'loginForm',
	onSubmit: (values, dispatch, props, previousValues) => {
		if(window.location.pathname !== '/')
			window.location.pathname = '/';

		dispatch({
			type: AUTH_LOGIN_REQUESTED,
			data: values,
		});
	}
})(LoginForm);

