// Library imports
import React from 'react';
import { Panel } from 'react-bootstrap';

const Record = ({
  visit,
  dateSubmitted,
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Record Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <div>
          <b>Assessment Performed</b>
          <p>{visit.date}</p>
        </div>
        <div>
          <b>Assessment Recorded</b>
          <p>{dateSubmitted}</p>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Record;
