import React from 'react';

const Search = ({ 
  value, 
  onChange,
  onSearchSubmit,
  children  
}) =>
  <form onSubmit={onSearchSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button 
      type="submit">
      {children}
    </button>
  </form>

export default Search;