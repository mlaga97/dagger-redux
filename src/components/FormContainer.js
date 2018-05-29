// Library imports
import React from 'react';

/*
 * This was inspired by the completely unreadable abomination found here:
 *
 *     https://github.com/jaredpalmer/formik
 *
 * I actually don't have a clue what is going on over in that hellscape,
 * or why they felt the need to make it some unnecesarilly complicated.
 *
 */

class FormContainer extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = props.initialValues;
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleBlur(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();

		// TODO: Pass something here
		this.props.handleSubmit(this.state, this.props);
	}

	render() {
		return React.cloneElement(this.props.children, {
			handleBlur: this.handleBlur.bind(this), 
			handleChange: this.handleChange.bind(this),
			handleSubmit: this.handleSubmit.bind(this), 
			values: this.state,
		});
	}
}

// I have no idea how or why this works, only that it is called
// a higher-order component. - Luc Lagarde (2018-05-29 2:53 AM)
// TODO: Learn.
let connectForm = (Inner) => {
  class Wrapper extends React.PureComponent {
    render() {
      return (
		<FormContainer {...this.props}>
			<Inner {...this.props} />
		</FormContainer>
      );
    }  
  }
  return Wrapper;
}

export default connectForm;
