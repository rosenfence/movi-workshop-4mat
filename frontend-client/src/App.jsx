import React, { useEffect, useState } from 'react';
import constants from './constants';
import { Finish, PartA, PartB, Start } from './components';
import { Header, Layout } from './components/common';

const initValue = {
  name: '',
  result: {
    partA: [0, 0, 0, 0],
    partB: 0,
  },
};

function App() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(initValue);

  /**
   * 상태 초기화
   */
  const reset = () => {
    setStep(0);
    setResult(initValue);
  };

  /**
   * @param {string} type 구간별 식별값
   * @param {any} value
   * @example
   * onChangeResult('name', '새던');
   * onChangeResult('partA', [1, 2, 3, 4]);
   * onChangeResult('partB', 5);
   * onChangeResult('reset');
   */
  const handleChangeResult = (type, value) => {
    switch (type) {
      case 'name':
        setResult((prev) => ({ ...prev, [type]: value }));
        break;
      case 'partA':
        setResult((prev) => ({
          ...prev,
          result: { ...prev.result, [type]: value },
        }));
        break;
      case 'partB':
        setResult((prev) => ({
          ...prev,
          result: { ...prev.result, [type]: value },
        }));
        break;
      default:
        break;
    }
    if (type !== 'reset') setStep(step + 1);
    else reset();
  };

  useEffect(() => {
    // 카카오 100vh 문제 해결
    const setSize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setSize();

    window.addEventListener('resize', setSize);
    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <Layout>
      {step !== 3 && <Header />}
      <main className="h-full flex flex-col">
        {step === 0 && <Start onChangeResult={handleChangeResult} />}
        {step === 1 && (
          <PartA onChangeResult={handleChangeResult} totalQuestions={constants.STEP_ONE_QUESTIONS_COUNT} />
        )}
        {step === 2 && (
          <PartB onChangeResult={handleChangeResult} totalQuestions={constants.STEP_TWO_QUESTIONS_COUNT} />
        )}
        {step === 3 && <Finish result={result} onChangeResult={handleChangeResult} />}
      </main>
    </Layout>
  );
}

export default App;
