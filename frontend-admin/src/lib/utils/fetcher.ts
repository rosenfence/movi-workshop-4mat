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
  const response = await fetch('/api/data');
  const data: DataResponse[] = await response.json();

  let [a, b, c, d, e] = [-11, -11, -11, -11, -11];

  let result = data.map((v) => {
    const name = v.name;
    const partA = [...v.result.partA];
    const partB = v.result.partB;

    [a, b, c, d, e] = [
      Math.max(a, partA[0]),
      Math.max(b, partA[1]),
      Math.max(c, partA[2]),
      Math.max(d, partA[3]),
      Math.max(e, partB),
    ];

    return {
      name,
      result: {
        partA: [
          { value: partA[0], isTop: false },
          { value: partA[1], isTop: false },
          { value: partA[2], isTop: false },
          { value: partA[3], isTop: false },
        ],
        partB: { value: partB, isTop: false },
      },
    };
  });

  result = result.map((v) => ({
    ...v,
    result: {
      partA: v.result.partA.map((v, i) => ({ ...v, isTop: v.value === [a, b, c, d][i] })),
      partB: { ...v.result.partB, isTop: v.result.partB.value === e },
    },
  }));

  return result;
};

export default fetcher;
