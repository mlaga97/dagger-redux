// Library imports
import React from 'react';

function Header(props) {
  const { header } = props;

  if (!header) { return null; }

  return (
    <div>
      <b>{header}</b>
      <br />
    </div>
  );
}

export default Header;
