// Library imports
import React from 'react';

// Components
import AssessmentQuestions from './Questions';

function AssessmentSectionHeader(props) {
	if(!props.header)
		return null;

	return(
		<div>
			<b>{props.header}</b><br/>
		</div>
	);
}

function AssessmentSectionDescription(props) {
	if(!props.description)
		return null;

	return(
		<div>
			<b>{props.description}</b><br/>
		</div>
	);
}

// TODO: Come up with a better system than header and description.
function AssessmentSection(props) {
	if(!props.section)
		return null;

	return(
		<div>
			{/* Show header, if it exists */}
			<AssessmentSectionHeader header={props.section.header} />

			{/* Show description, if it exists */}
			<AssessmentSectionDescription description={props.section.description} />

			{/* Render questions */}
			<AssessmentQuestions questions={props.section.questions} types={props.types} />

			<br/>
		</div>
	);
}

export default AssessmentSection;
