// Library imports
import React from 'react';

const Assessments = ({
  selected,
}) => (
  <td data-label='Assessments'>
    {
      Object.keys(selected)
        .filter(key => selected[key])
        .join(', ')
    }
  </td>
);

export default Assessments;
