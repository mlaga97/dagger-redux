// Library imports
import React from 'react';

function Description(props) {
  const description = props.description;

  if (!description) { return null; }

  return (
    <div>
      <b>{description}</b>
      <br />
    </div>
  );
}

export default Description;
