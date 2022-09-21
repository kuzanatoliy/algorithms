import { insertionSort } from "./insertion-sort";
import { testCases } from "../test-utils";

describe("insertion sort", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))(
    "test %s:",
    (_, { value, result, comparator, order }) => {
      expect(insertionSort(value as any, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toBeCalled();
      }
    }
  );
});
