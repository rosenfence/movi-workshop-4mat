import React from 'react';
import strings from '../../constants/strings';
import { CheckBox } from '.';

const Option = ({ idx, option, number, part, onClick }) => {
  return (
    <div
      className="flex items-center gap-4 py-3 px-5 rounded-lg cursor-pointer transition-colors hover:bg-orange-100"
      onClick={onClick}
    >
      <CheckBox value={number} onClick={onClick} />
      <p className="text-gray-700 text-lg select-none">{strings[part]?.[idx]?.[option]}</p>
    </div>
  );
};

export default Option;
