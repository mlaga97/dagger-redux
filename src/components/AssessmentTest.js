// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import {ASSESSMENT_ALL_REQUESTED} from '../actions/allActions';

// Components
import Assessment from './Assessment';

class AssessmentTest extends React.Component {
	componentWillMount() {
		this.props.dispatch({type: ASSESSMENT_ALL_REQUESTED});
	}

	render() {
		if(!this.props.assessment) { 
			return(
				<div>Retrieving assessments...</div>
			);
		} else {
			return(
				<div>
					{
						Object.keys(this.props.assessment.all).map((key) => {
							let value = this.props.assessment.all[key];
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
		assessment: state.assessment,
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
