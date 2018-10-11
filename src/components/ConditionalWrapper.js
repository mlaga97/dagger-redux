// Library imports
import React from 'react';

const ConditionalWrapper = ({display, children}) => ((display) ? (<React.Fragment>{children}</React.Fragment>) : null);

export default ConditionalWrapper;
