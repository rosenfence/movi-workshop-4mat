import React, { useState } from 'react';
import { Header, Layout, PartA } from './components';
import constants from './constants';

function App() {
  const [step, setStep] = useState(1); //임시로 1
  const [result, setResult] = useState({
    name: '',
    result: {
      partA: [0, 0, 0, 0],
      partB: 0,
    },
  });

  // type = "name" | "partA" | "partB"
  // value = 해당 타입에 맞는 값들
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
    }
    setStep(step + 1);
  };

  // 각 구간에서 호출해야 하는 형태
  // onChangeResult('name', '새던');
  // onChangeResult('partA', [1, 2, 3, 4]);
  // onChangeResult('partB', 5);

  // Finish 컴포넌트 안에서 해당 결과를 바로 api 요청 태우면 될 듯

  return (
    <Layout>
      <Header />
      {/* {step === 0 && <Start onChangeResult={handleChangeResult} />} */}
      {step === 1 && (
        <PartA
          onChangeResult={handleChangeResult}
          totalQuestions={constants.STEP_ONE_QUESTIONS_COUNT}
        />
      )}
      {/* {step === 2 && <PartB onChangeResult={handleChangeResult} totalQuestions={constants.STEP_TWO_QUESTIONS_COUNT} />} */}
      {/* {step === 3 && <Finish result={result} />} */}
      {/* <Test /> */}
    </Layout>
  );
}

export default App;
