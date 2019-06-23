import React from 'react';
import Button from './button';

const Table = ({ list, isSearched, value, onDismiss }) =>
  <div>
    {list.filter(isSearched(value)).map(item => <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author} </span>
        <span> {item.num_comments} </span>
        <span> {item.points} </span>
        <span>
          <Button 
          onDismiss={onDismiss} 
          item={item.objectID}
          className="button"
          >
            Dismiss
          </Button>
        </span>
      </div>
      )}
  </div>

export default Table;