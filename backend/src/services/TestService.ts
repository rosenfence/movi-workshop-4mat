export interface Data {
  name: string;
  result: {
    partA: [number, number, number, number];
    partB: number;
  };
}

class TestService {
  private static instance: TestService;
  private db: Data[] = [];

  public static getInstance(): TestService {
    if (!TestService.instance) {
      TestService.instance = new TestService();
    }
    return TestService.instance;
  }

  getDatas() {
    return this.db;
  }

  addData(data: Data) {
    this.db.push(data);
    return data;
  }

  initialize() {
    for (let i = 0; i < 5; i++) {
      this.addData({
        name: 'Test',
        result: {
          partA: [
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1,
          ],
          partB: Math.floor(Math.random() * 10) + 1,
        },
      });
    }
  }

  clearDatas() {
    this.db = [];
  }
}

export default TestService;
