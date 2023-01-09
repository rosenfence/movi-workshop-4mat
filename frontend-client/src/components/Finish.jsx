import React, { useRef, useEffect } from 'react';
import { Button, Lottie } from './common';

const Finish = ({ result, onChangeResult }) => {
  const called = useRef(false);

  const handleClick = () => onChangeResult('reset');

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    fetch(`${process.env.REACT_APP_BACKEND}/api/data`, {
      method: 'POST',
      body: JSON.stringify(result),
    });
  }, []);

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
