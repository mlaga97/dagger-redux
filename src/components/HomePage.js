// Library imports
import React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Button, Panel } from 'react-bootstrap';

// Styling
import '../style/dagger.css';

// Components
import UserStatistics from './UserStatistics';

// Helpers
// TODO: Forgive me, for I have sinned.
const HomePage = () => (
  <div className='container'>
    <Panel>
      <Panel.Heading>Welcome</Panel.Heading>
      <Panel.Body style={{paddingTop: '50px', paddingBottom: '70px'}}>
        <center>
          <div style={{display: 'inline', margin: '30px'}}>
            <IndexLinkContainer to='/assessment'>
              <Button>New Record</Button>
            </IndexLinkContainer>
          </div>
          <div style={{display: 'inline', margin: '30px'}}>
            <IndexLinkContainer to='/responses'>
              <Button style={{margin: '10px'}}>Search</Button>
            </IndexLinkContainer>
          </div>
        </center>
      </Panel.Body>
    </Panel>
    <UserStatistics />
  </div>
)

export default HomePage;
