// Library imports
import React from 'react';

// Components
import Summary from './Summary';
import Assessments from './Assessments';

const Response = ({
  response: {
    metadata,
    assessments: { selected },
  },
}) => (
  <tr key={metadata.id}>
    <Summary metadata={metadata} />
    <Assessments selected={selected} />
  </tr>
);

export default Response;
