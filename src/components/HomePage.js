// Library imports
import React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Button, Panel } from 'react-bootstrap';

// Styling
import '../style/dagger.css';

// Components
import UserStatistics from './UserStatistics';

// Helpers
// DONE: Absolution for inline styling
const HomePage = () => (
  <div>
    <Panel>
      <Panel.Heading>Select Activity</Panel.Heading>
      <Panel.Body>
        <div className="centered">
            <IndexLinkContainer to='/assessment'>
              <Button>New Record</Button>
            </IndexLinkContainer>
            <IndexLinkContainer to='/responses'>
              <Button>Search</Button>
            </IndexLinkContainer>
        </div>
      </Panel.Body>
    </Panel>
    <UserStatistics />
  </div>
)

export default HomePage;
