// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

// Actions
import actions from '../actions';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {},
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		// TODO: Do a validate!

		// TODO: Change this is login page is moved.
		if(window.location.pathname !== '/')
			window.location.pathname = '/';

		// Attempt Login
		this.props.dispatch({
			type: actions.auth.login.requested,
			data: this.state.form,
		});
	}

	handleChange(event) {
		let target = event.target;

		let name = target.name;
		let value = target.value;

		this.setState(prevState => ({
			...prevState,
			form: {
				...prevState.form,
				[name]: value,
			},
		}));
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<FormGroup>
					<ControlLabel>Login</ControlLabel>
					<FormControl name='username' type='text' value={this.state.username} onBlur={this.handleChange} />
					<FormControl name='password' type='password' value={this.state.password} onBlur={this.handleChange} />
				</FormGroup>
				<Button type='submit'>Submit</Button>
			</form>
		)
	}
}

export default connect(
	props => ({
	}),
	dispatch => ({
		dispatch: dispatch,
	})
)(LoginForm);
//export default LoginForm;
