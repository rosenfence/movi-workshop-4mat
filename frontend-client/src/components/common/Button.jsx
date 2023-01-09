import React from 'react';

const Button = ({ value, onClick, children, ...rest }) => {
  return (
    <button
      className="w-full h-[48px] font-medium bg-orange-400 rounded-md transition-colors hover:bg-orange-500 disabled:text-gray-400 disabled:bg-gray-200"
      onClick={onClick}
      {...rest}
    >
      {value ?? children}
    </button>
  );
};

export default Button;
