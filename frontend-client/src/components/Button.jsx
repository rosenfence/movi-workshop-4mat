import React from 'react';

const Button = (props) => {
  const { number, onClick, ...rest } = props;

  return (
    <button className='w-9 h-9 bg-white border border-gray-400 rounded-md' onClick={onClick}>
      {number === 0 ? '' : number}
    </button>
  );
};

export default Button;
