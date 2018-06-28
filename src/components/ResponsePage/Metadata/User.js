// Library imports
import React from 'react';
import { Panel } from 'react-bootstrap';

const User = ({
  user: { id },
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Clinician Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <div>
          <b>User ID</b>
          <p>{id}</p>
        </div>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default User;
