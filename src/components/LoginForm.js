// Library imports
import React from 'react';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

// Actions
import actions from '../actions';

let LoginForm = ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
	<form onSubmit={handleSubmit}>
		<FormGroup>
			<ControlLabel>Login</ControlLabel>
			<FormControl name='username' type='text' onBlur={handleBlur} onChange={handleChange} value={values.username} />
			<FormControl name='password' type='password' onBlur={handleBlur} onChange={handleChange} value={values.password} />
		</FormGroup>
		<Button type='submit'>Submit</Button>
	</form>
)

LoginForm = withFormik({
	mapPropsToValues: props => props,

	handleSubmit: (values, {props}) => {
		props.dispatch({
			type: actions.auth.login.requested,
			data: values,
		})
	}
})(LoginForm);


export default connect(
	props => ({
	}),
	dispatch => ({
		dispatch: dispatch,
	})
)(LoginForm);
