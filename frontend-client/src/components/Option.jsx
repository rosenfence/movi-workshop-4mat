import React from 'react';
import Button from './Button';
import strings from '../constants/strings';

const Option = ({ idx, option, number, onClick }) => {
  return (
    <div className='flex items-center gap-4 py-3 px-5 rounded-lg cursor-pointer transition-colors hover:bg-orange-100' onClick={onClick}>
      <Button number={number} />
      <p className='text-gray-700 text-lg select-none'>{strings[idx][option]}</p>
    </div>
  );
};

export default Option;
