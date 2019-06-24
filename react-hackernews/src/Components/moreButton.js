import React from 'react';

const MoreButton = ({
  fetchSearchTopStories,
  searchTerm,
  page,
  children
}) => 
  <button onClick={() => fetchSearchTopStories(searchTerm, page+1)}>
  {children}
  </button>

export default MoreButton;