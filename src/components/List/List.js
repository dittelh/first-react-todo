import React from 'react';
import './List.css';

const List = () => {
  return (
    <div className='listDiv'>
      <p className='listItems'>{/* Map over 'todos' and render each todo as a list item */}</p>
    </div>
  );
};

export default List;
