// Library imports
import React from 'react';

// Components
import Patient from './Patient';
import Record from './Record';
import User from './User';
import Clinic from './Clinic';

const Metadata = ({
  metadata: { patient, clinic, user, visit, dateSubmitted },
}) => (
  <React.Fragment>
    <Patient patient={patient} />
    <User user={user} />
    <Clinic clinic={clinic} />
    <Record visit={visit} dateSubmitted={dateSubmitted} />
  </React.Fragment>
);

export default Metadata;
