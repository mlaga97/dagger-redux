// Library imports
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Utilities
import getSections from './utilities/getSections';

// Components
import Scoring from './Scoring';
import Sections from './Sections';

function Assessment(props) {
  const { response, editable, metadata, onUpdate } = props;

  return (
    <Grid className='container-fluid container-assessment'>
      <Row>
          <Sections
            sections={getSections(props)} // TODO: Move down?
            editable={editable}
            response={response}
            metadata={metadata}
            onUpdate={onUpdate}
          />
      </Row>
      <Row>
        <Col sm={12}>
          <Scoring
            response={response}
            metadata={metadata}
          />
        </Col>
      </Row>
    </Grid>
  );
}

export default Assessment;
