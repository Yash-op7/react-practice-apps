import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div
      className="h-[200px] w-[400px]"
      style={{ backgroundColor: color }}
    >
    </div>
  );
};

export default ColorBox;
