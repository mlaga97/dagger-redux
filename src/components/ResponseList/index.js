// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row } from 'react-bootstrap';

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
