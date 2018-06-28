// Library imports
import React from 'react';

const Assessments = ({
  selected,
}) => (
  <td>
    {
      Object.keys(selected)
        .filter(key => selected[key])
        .join(', ')
    }
  </td>
);

export default Assessments;
