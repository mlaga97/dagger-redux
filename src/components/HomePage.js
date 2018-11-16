// Library imports
import React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { Button} from 'react-bootstrap';

// Styling
import '../style/dagger.css';

// Components
import UserStatistics from './UserStatistics';

// Helpers
// DONE: Absolution for inline styling
const HomePage = () => (
  <div>
    <UserStatistics />
  </div>
)

export default HomePage;
