import React from 'react';

const Progress = ({ value = 0 }) => {
  return (
    <div className='absolute top-[60px] left-0 w-full h-[12px] bg-gray-100'>
      <div
        style={{
          width: `${value}%`,
        }}
        className='absolute top-0 left-0 h-full bg-red-500 transition-all'
      />
    </div>
  );
};

export default Progress;
