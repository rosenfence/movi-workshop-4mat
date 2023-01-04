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
}

export default TestService;
