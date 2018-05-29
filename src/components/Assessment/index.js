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

	// Translate questions field into sections format
	// TODO: Decide if we should deprecate assessment.questions
	if(questions) {
		sections = [
			{
				'questions': questions,
			}
		];
	}

	let offset = 0;

	return(
		<div>
			{
				// Render Sections
				sections.map((section, index) => {
					index = index + offset;
					offset = offset + section.questions.length - 1;

					return <Section key={index} index={index} section={section} types={types} />
				})
			}
		</div>
	);
}

export default Assessment;
