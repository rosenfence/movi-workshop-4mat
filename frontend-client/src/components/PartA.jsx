import React, { useState } from 'react';
import strings from '../constants/strings';
import { Option, Progress } from './';

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

  // TODO: 시작화면, 닉네임 입력 부분
  // TODO: 문제 진행, 프로그레스, 다음으로 클릭 시 최종 점수 상태 갱신
  // TODO: 모든 문제 완료 시 수고하셧다는 문구 끝.

  return (
    <main className="h-full flex flex-col">
      <Progress value={questionNumber} max={totalQuestions} />
      <section className="flex-1 flex-col flex-center pb-10">
        <p className="mb-1 text-gray-700 text-xl text-center">
          PART A ({`${(questionNumber + 1).toString().padStart(2, '0')}`} / {totalQuestions})
        </p>
        <p className="mb-4 text-gray-700">본인과 가장 비슷한 질문부터 순서대로 클릭해주세요.</p>
        <p className="text-2xl font-medium">{strings[questionNumber].title}</p>
      </section>
      <section className="mb-4">
        <div className="flex justify-end">
          <button
            className="mb-4 py-3 px-5 text-white bg-gray-600 rounded-md transition-colors hover:bg-gray-700"
            onClick={handleClickReset}
          >
            초기화
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
      </section>
      <section>
        <button
          className="w-full h-[48px] font-medium bg-orange-400 rounded-md transition-colors hover:bg-orange-500 disabled:text-gray-400 disabled:bg-gray-200"
          onClick={handleClickNext}
          disabled={!isValid()}
        >
          다음으로
        </button>
      </section>
    </main>
  );
};

export default PartA;
