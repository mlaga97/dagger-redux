// Library imports
import React from 'react';

// Components
import QueryCount from '../../QueryCount';

// TODO: Make plurals work properly
function SearchResultsCount(props) {
  const query = {
    ...props.query,
    queryID: 'responseList_count',
  }

  return (
    <div className='search-results-count'>
      <QueryCount parameters={query} /> Result(s)
    </div>
  );
}

export default SearchResultsCount;
