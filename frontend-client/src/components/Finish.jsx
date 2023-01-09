import React, { useEffect } from 'react';
import { Button, Lottie } from './common';

const Finish = ({ result, onChangeResult }) => {
  const handleClick = () => onChangeResult('reset');

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex-center flex-1">
        <Lottie name="ty" loop={false} />
      </div>
      <div>
        <Button onClick={handleClick}>처음으로</Button>
      </div>
    </>
  );
};

export default Finish;
