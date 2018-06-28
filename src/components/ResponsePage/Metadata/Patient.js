// Library imports
import React from 'react';
import { Panel } from 'react-bootstrap';

const Patient = ({
  patient: { id, dob },
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Patient Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <div>
          <b>Patient ID</b>
          <p>{id}</p>
        </div>
        <div>
          <b>Patient DOB</b>
          <p>{dob}</p>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Patient;
