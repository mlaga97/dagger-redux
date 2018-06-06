// Library imports
import React from 'react';

// Utilities
import getSections from '../../utilities/Assessment/getSections';

// Components
import Section from './Section';

function Assessment(props) {
  return (
    <div>
      {
        // Render Sections
        getSections(props).map(section => (
          <Section key={section.index} {...section} />
        ))
      }
    </div>
  );
}

export default Assessment;
