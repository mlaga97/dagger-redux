// Library imports
import React from 'react';

// Components
import Section from './Section';

function Assessment(props) {

	// Props
	let assessment = props.assessment;

	// Assessment Variables
	let types = assessment.types;
	let sections = assessment.sections;
	let questions = assessment.questions;

	// TODO: Decide if this will be replaced by deprecating assessment.questions
	if(questions) {
		sections = [
			{
				'questions': questions,
			}
		];
	}

	return(
		<div>
			{
				// Render Sections
				sections.map((section, index) => (
					<Section key={index} section={section} types={types} />
				))
			}
		</div>
	);
}

export default Assessment;
