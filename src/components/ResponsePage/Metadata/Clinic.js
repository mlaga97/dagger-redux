// Library imports
import React from 'react';
import { Panel } from 'react-bootstrap';

const Clinic = ({
  clinic: { id },
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Clinic Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <div>
          <b>Clinic ID</b>
          <p>{id}</p>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Clinic;
