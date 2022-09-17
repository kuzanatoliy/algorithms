import { insertionSort } from "./insertion-sort";

const comparatorSpy = jest
  .fn()
  .mockImplementation((prev: number, curr: number) => prev < curr);

const comparatorObjectSpy = jest
  .fn()
  .mockImplementation(
    (prev: { v: number }, curr: { v: number }) => prev.v < curr.v
  );

describe("insertion sort", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    value                              | result                             | comparator
    ${[-3, -1, 0, 1, 3]}               | ${[-3, -1, 0, 1, 3]}               | ${undefined}
    ${[7, -5, 3, -7, 0, -1, 5, 1, -3]} | ${[-7, -5, -3, -1, 0, 1, 3, 5, 7]} | ${undefined}
    ${[3, 1, 0, -1, -3]}               | ${[-3, -1, 0, 1, 3]}               | ${comparatorSpy}
    ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${comparatorObjectSpy}
    ${[{ v: 5 }, { v: -5 }, { v: 0 }]} | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${comparatorObjectSpy}
  `("test: turn $value into $result", ({ value, result, comparator }) => {
    expect(insertionSort(value, comparator)).toEqual(result);
    if (comparator) {
      expect(comparator).toBeCalled();
    }
  });
});
