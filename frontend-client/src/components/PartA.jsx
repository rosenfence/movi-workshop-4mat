import React, { useState } from 'react';
import strings from '../constants/strings';
import { Option, Progress } from './';

const PartA = () => {
  const [sort, setSort] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  });
  const [number, setNumber] = useState(4);
  const [questionNumber, setQuestionNumber] = useState(0);

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
    <main className='h-full flex flex-col'>
      <Progress />
      <section className='flex-1 flex-col flex-center pb-10'>
        <div className='flex-center h-[30%] text-gray-700 text-3xl'>PART A</div>
        <div className='h-[20%] text-gray-700 text-2xl'>본인과 가장 비슷한 질문부터 순서대로 클릭해주세요.</div>
        <div className='h-[40%]'>문항번호: {strings[questionNumber].title}</div>
      </section>
      <section className='mb-4'>
        {['one', 'two', 'three', 'four'].map((option) => (
          <Option key={option} idx={questionNumber} option={option} number={sort[option]} onClick={sort[option] !== 0 ? undefined : () => handleClickOption(option)} />
        ))}
        <div className='flex justify-end'>
          <button className='py-3 px-5 text-white bg-gray-600 rounded-md transition-colors hover:bg-gray-700' onClick={handleClickReset}>
            초기화
          </button>
        </div>
      </section>
      <section>
        <button
          className='w-full h-[48px] font-medium bg-orange-400 rounded-md transition-colors hover:bg-orange-500 disabled:text-gray-400 disabled:bg-gray-200'
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
