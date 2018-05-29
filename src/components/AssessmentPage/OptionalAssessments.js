// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import Assessment from '../Assessment';

// TODO: Handle the 'optional' part
class OptionalAssessments extends React.Component {
	componentWillMount() {
		if(!this.props.assessments)
			this.props.dispatch({type: actions.assessment.all.requested});
	}

	render() {
		let assessments = this.props.assessments;

		if(!assessments) { 
			return(
				<div>Retrieving assessments...</div>
			);
		} else {
			return(
				<div>
					{
						Object.keys(assessments).map((key) => {
							if(this.props.response.selected[key]) {

								let assessment = assessments[key];

								return(
									<Panel key={key} defaultExpanded>
										<Panel.Heading>
											<Panel.Title toggle>
												{assessment.metadata.text}
											</Panel.Title>
										</Panel.Heading>
										<Panel.Collapse>
											<Panel.Body>
												<Assessment assessment={assessment}/>
											</Panel.Body>
										</Panel.Collapse>
									</Panel>
								);
							} else {
								return null;
							}
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
		response: state.response,
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
)(OptionalAssessments);
