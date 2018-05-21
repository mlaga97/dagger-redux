// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import actions from '../actions';

// Components
import Assessment from './Assessment';

class AssessmentTest extends React.Component {
	componentWillMount() {
		if(!this.props.assessments)
			this.props.dispatch({type: actions.assessment.all.requested});
	}

	render() {
		if(!this.props.assessments) { 
			return(
				<div>Retrieving assessments...</div>
			);
		} else {
			return(
				<div>
					{
						Object.keys(this.props.assessments.all).map((key) => {
							let value = this.props.assessments.all[key];
							return(
								<Assessment key={key} assessmentClass={value} />
							);
						})
					}
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		assessments: state.assessments,
		auth: state.auth,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: dispatch,
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AssessmentTest);
