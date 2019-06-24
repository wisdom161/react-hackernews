import React from 'react';

const MoreButton = ({
  fetchSearchTopStories,
  searchKey,
  page,
  children
}) => 
  <button onClick={() => fetchSearchTopStories(searchKey, page+1)}>
  {children}
  </button>

export default MoreButton;