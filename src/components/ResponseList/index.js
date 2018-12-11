// Library imports
import React from 'react';

// Components
import Search from './ServerSort';
import RandomEntry from '../RandomEntry';
import ConditionalWrapper from '../ConditionalWrapper';

const ResponseList = () => (
  <div>
    <ConditionalWrapper display={process.env.REACT_APP_ENVIRONMENT === 'development'}>
      <RandomEntry />
    </ConditionalWrapper>
    <Search />
  </div>
)

export default ResponseList;
