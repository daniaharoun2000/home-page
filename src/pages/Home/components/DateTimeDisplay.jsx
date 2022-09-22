import React from 'react';

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <span>{value}</span>
  
    </div>
  );
};

export default DateTimeDisplay;
