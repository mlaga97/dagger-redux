// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import actions from '../../actions';

// Components
import AssessmentSelector from './AssessmentSelector';
import AssessmentMetadata from './AssessmentMetadata';
import OptionalAssessments from './OptionalAssessments';

class AssessmentTest extends React.Component {
	componentWillMount() {
		if(!this.props.assessments)
			this.props.dispatch({type: actions.assessment.all.requested});
	}

	render = () => (
		<form>
			<AssessmentMetadata />
			{/*<RequiredAssessments />*/}
			<AssessmentSelector assessments={this.props.assessments} />
			<OptionalAssessments assessments={this.props.assessments} />
		</form>
	)
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
