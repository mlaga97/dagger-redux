// Library imports
import React from 'react';

// Components
import Section from './Section';

function Assessment(props) {
  // Props
  const { assessment } = props;

  // Assessment Variables
  let { sections } = assessment;
  const { types, questions } = assessment;

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
          const key = index + offset;
          offset += section.questions.length - 1;

          return <Section key={key} index={index} section={section} types={types} />;
        })
      }
    </div>
  );
}

export default Assessment;
