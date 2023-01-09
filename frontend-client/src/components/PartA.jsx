import React, { useState } from 'react';
import strings from '../constants/strings';
import { Button, Option, Progress } from './common';

const PartA = ({ onChangeResult, totalQuestions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [number, setNumber] = useState(4);
  const [sort, setSort] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  });

  const isValid = () => {
    return Object.keys(sort).every((key) => sort[key] !== 0);
  };

  function reset() {
    setSort({ one: 0, two: 0, three: 0, four: 0 });
    setNumber(4);
  }

  const handleClickOption = (option) => {
    const nextSort = { ...sort, [option]: number };
    setSort(nextSort);
    setNumber(number - 1);
  };

  const handleClickReset = () => {
    reset();
  };

  const handleClickNext = () => {
    reset();
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <>
      <Progress value={questionNumber} max={totalQuestions} />
      <div className="flex-1 flex-col flex-center pb-10">
        <p className="mb-2 text-gray-700 text-xl text-center">
          PART A ({`${(questionNumber + 1).toString().padStart(2, '0')}`} / {totalQuestions})
        </p>
        <p className="mb-4 text-gray-700">본인과 가장 비슷한 질문부터 순서대로 클릭해주세요.</p>
        <p className="text-2xl font-medium">{strings[questionNumber].title}</p>
      </div>
      <div className="mb-4">
        <div className="flex justify-end">
          <button
            className="mb-4 py-2 px-5 text-white bg-gray-600 rounded-md transition-colors hover:bg-gray-700"
            onClick={handleClickReset}
          >
            선택 초기화
          </button>
        </div>
        {['one', 'two', 'three', 'four'].map((option) => (
          <Option
            key={option}
            idx={questionNumber}
            option={option}
            number={sort[option]}
            onClick={sort[option] !== 0 ? undefined : () => handleClickOption(option)}
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

export default PartA;
