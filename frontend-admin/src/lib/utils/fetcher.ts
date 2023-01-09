type DataResponse = {
  name: string;
  result: {
    partA: [number, number, number, number];
    partB: number;
  };
};

export type Data = Omit<DataResponse, 'result'> & {
  name: string;
  result: {
    partA: { value: number; isTop: boolean }[];
    partB: { value: number; isTop: boolean };
  };
};

const fetcher = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/data`);
  const data: DataResponse[] = await response.json();

  const result = data.map((v) => {
    const name = v.name;
    const partA = [...v.result.partA];
    const partB = v.result.partB;

    // 각 테스터별로 높은 점수 상위 2개 하이라이트
    const tempPartA = [...partA];
    tempPartA.sort((a, b) => b - a);
    const [first, second] = tempPartA;

    return {
      name,
      result: {
        partA: [
          { value: partA[0], isTop: [first, second].includes(partA[0]) },
          { value: partA[1], isTop: [first, second].includes(partA[1]) },
          { value: partA[2], isTop: [first, second].includes(partA[2]) },
          { value: partA[3], isTop: [first, second].includes(partA[3]) },
        ],
        partB: { value: partB },
      },
    };
  });

  return result;
};

export default fetcher;
