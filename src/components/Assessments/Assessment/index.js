// Library imports
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Utilities
import getSections from './utilities/getSections';

// Components
import Scoring from './Scoring';
import Sections from './Sections';

function Assessment(props) {
  const { response, editable, metadata, onUpdate } = props;

  return (
    <div>
    <Row>
      <Col sm={4}>
        <Sections
          sections={getSections(props)} // TODO: Move down?
          editable={editable}
          response={response}
          metadata={metadata}
          onUpdate={onUpdate}
        />
      </Col>
    </Row>
    <Row>
      <Col sm={12}>
        <Scoring
          response={response}
          metadata={metadata}
        />
      </Col>
    </Row>
    </div>
  );
}

export default Assessment;
