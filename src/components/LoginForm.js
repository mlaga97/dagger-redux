// Library imports
import React from 'react';
import connectForm from './FormContainer'; // <-- Probably Trash
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

// Actions
import actions from '../actions';

let InnerForm = ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
	<form onSubmit={handleSubmit}>
		<FormGroup>
			<ControlLabel>Login</ControlLabel>
			<FormControl name='username' type='text' onBlur={handleBlur} onChange={handleChange} value={values.username} />
			<FormControl name='password' type='password' onBlur={handleBlur} onChange={handleChange} value={values.password} />
		</FormGroup>
		<Button type='submit'>Submit</Button>
	</form>
);

let LoginForm = connectForm(InnerForm);

export default connect(
	props => ({
		handleSubmit: (state, props) => {
			props.dispatch({
				type: actions.auth.login.requested,
				data: state,
			});
		},
		initialValues: {
			username: '',
			password: '',
		},
	}),
	dispatch => ({
		dispatch: dispatch,
	})
)(LoginForm);

