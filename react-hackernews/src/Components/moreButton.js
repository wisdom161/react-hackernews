import React from 'react';

const MoreButton = ({
  fetchSearchTopStories,
  searchKey,
  page,
  children,
}) => 
  <button onClick={() => fetchSearchTopStories(searchKey, page+1)}>
  {children}
  </button>

const Loading = () => <div>Loadingggg...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) => isLoading 
? <Loading />
: <Component { ...rest} />

const MoreButtonWithLoading = withLoading(MoreButton)

export default MoreButtonWithLoading;