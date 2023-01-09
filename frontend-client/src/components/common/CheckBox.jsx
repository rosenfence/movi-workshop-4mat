import React from 'react';

const CheckBox = ({ value, onClick, ...rest }) => {
  return (
    <button className="w-9 h-9 bg-white border border-gray-400 rounded-md" onClick={onClick} {...rest}>
      {value === 0 ? '' : value}
    </button>
  );
};

export default CheckBox;
