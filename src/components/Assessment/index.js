// Library imports
import React from 'react';

// Components
import Section from './Section';

function Assessment(props) {
  // Props
  const assessment = props.assessment;

  // Assessment Variables
  const types = assessment.types;
  let sections = assessment.sections;
  const questions = assessment.questions;

  // Translate questions field into sections format
  // TODO: Decide if we should deprecate assessment.questions
  if (questions) {
    sections = [
      {
        questions,
      },
    ];
  }

  let offset = 0;

  return (
    <div>
      {
				// Render Sections
				sections.map((section, index) => {
					index += offset;
					offset = offset + section.questions.length - 1;

					return <Section key={index} index={index} section={section} types={types} />;
				})
			}
    </div>
  );
}

export default Assessment;
