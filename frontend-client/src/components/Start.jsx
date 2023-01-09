import React, { useState } from 'react';
import { Button } from './common';

const Start = ({ onChangeResult }) => {
  const [name, setName] = useState('');

  const handleClick = () => onChangeResult('name', name);
  const onChange = (e) => setName(e.target.value);

  return (
    <>
      <div className="flex-center flex-1">
        <img className="w-[60%]" src="/assets/layer.png" alt="시작" />
      </div>
      <div className="mb-4">
        <input
          className="w-full py-3 px-5 text-gray-700 border outline-transparent rounded-md transition-all duration-300 focus:outline-orange-400"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={onChange}
          maxLength={12}
        />
      </div>
      <div>
        <Button onClick={handleClick} disabled={name === ''}>
          테스트 시작하기
        </Button>
      </div>
    </>
  );
};

export default Start;
