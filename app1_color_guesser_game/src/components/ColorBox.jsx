import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div 
      className='h-[150px] w-[150px] border' 
      style={{ backgroundColor: color }} 
    />
  );
};

export default ColorBox;
