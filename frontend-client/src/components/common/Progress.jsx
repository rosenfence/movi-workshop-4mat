import React from 'react';

const Progress = ({ value = 0, max }) => {
  return (
    <div className="absolute top-[60px] left-0 w-full h-[12px] bg-gray-100">
      <div
        className="absolute top-0 left-0 h-full bg-red-500 transition-all"
        style={{
          width: `${(value / max) * 100}%`,
        }}
      />
    </div>
  );
};

export default Progress;
