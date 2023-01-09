import React, { useState, useEffect } from 'react';
import strings from '../constants/strings';
import { Button, Option, Progress } from './common';

const initValue = Object.freeze({
  one: 0,
  two: 0,
});

const PartB = ({ onChangeResult, totalQuestions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [sort, setSort] = useState(initValue);
  const [acc, setAcc] = useState([0, 0]);

  /**
   * 다음 문항으로 넘어갈 수 있는지 체크
   */
  const isValid = () => Object.keys(sort).some((key) => sort[key] !== 0);

  const reset = () => {
    setSort(initValue);
  };

  const handleClickOption = (option) => {
    // <<
    let nextSort;
    if (option === 'one') nextSort = { one: -1, two: 0 };
    else nextSort = { one: 0, two: 1 };
    setSort(nextSort);
  };

  const handleClickNext = () => {
    const nextAcc = [...acc];
    Object.keys(sort).forEach((key, index) => (nextAcc[index] += sort[key]));
    setAcc(nextAcc);

    reset();
    setQuestionNumber(questionNumber + 1);
  };

  useEffect(() => {
    if (questionNumber === totalQuestions) {
      onChangeResult('partB', acc[0] + acc[1]);
    }
  }, [questionNumber]);

  return (
    <>
      <Progress value={questionNumber} max={totalQuestions} />
      <div className="flex-1 flex-col flex-center pb-10">
        <p className="mb-2 text-gray-700 text-xl text-center">
          PART B ({`${(questionNumber + 1).toString().padStart(2, '0')}`} / {totalQuestions.toString().padStart(2, '0')}
          )
        </p>
        <p className="mb-4 text-gray-700">본인을 더 잘 표현하는 것을 클릭해주세요.</p>
        <p className="text-2xl font-medium">{strings['partB'][questionNumber]?.title}</p>
      </div>
      <div className="mb-4">
        {['one', 'two'].map((option) => (
          <Option
            key={option}
            idx={questionNumber}
            option={option}
            part="partB"
            number={sort[option] !== 0 ? 'v' : ''}
            onClick={() => handleClickOption(option)}
          />
        ))}
      </div>
      <div>
        <Button onClick={handleClickNext} disabled={!isValid()}>
          다음으로
        </Button>
      </div>
    </>
  );
};

export default PartB;
