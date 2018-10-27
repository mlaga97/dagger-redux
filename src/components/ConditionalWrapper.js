// Library imports
import React from 'react';

const ConditionalWrapper = ({display, children}) => {
  if (!display) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}

export default ConditionalWrapper;
