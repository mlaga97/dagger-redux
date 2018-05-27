// Library imports
import React from 'react';

// Components
import AssessmentSection from './Section';

function Assessment(props) {
	let assessment = props.assessment;

	// TODO: Decide if this will be replaced by requiring it to be a section
	if(assessment.questions) {
		assessment.sections = [
			{
				'questions': assessment.questions,
			}
		];
	}

	return(
		<div>
			{/* Render Sections */}
			{
				assessment.sections.map((section, index) => {
					return(
						<AssessmentSection key={index} section={section} types={assessment.types} />
					);
				})
			}
		</div>
	);
}

export default Assessment;
