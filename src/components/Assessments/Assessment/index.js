// Library imports
import React from 'react';

// Utilities
import getSections from './utilities/getSections';

// Components
import Scoring from './Scoring';
import Sections from './Sections';

function Assessment(props) {
  const { response, editable, metadata, onUpdate } = props;

  return (
    <div>
      <Sections
        sections={getSections(props)} // TODO: Move down?
        editable={editable}
        response={response}
        metadata={metadata}
        onUpdate={onUpdate}
      />
      <Scoring
        response={response}
        metadata={metadata}
      />
    </div>
  );
}

export default Assessment;
