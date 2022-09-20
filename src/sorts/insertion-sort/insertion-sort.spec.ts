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
    value                              | result                             | comparator             | order
    ${[-3, -1, 0, 1, 3]}               | ${[-3, -1, 0, 1, 3]}               | ${undefined}           | ${undefined}
    ${[7, -5, 3, -7, 0, -1, 5, 1, -3]} | ${[-7, -5, -3, -1, 0, 1, 3, 5, 7]} | ${undefined}           | ${true}
    ${[3, 1, 0, -1, -3]}               | ${[-3, -1, 0, 1, 3]}               | ${comparatorSpy}       | ${true}
    ${[-3, -1, 0, 1, 3]}               | ${[3, 1, 0, -1, -3]}               | ${undefined}           | ${false}
    ${[7, -5, 3, -7, 0, -1, 5, 1, -3]} | ${[7, 5, 3, 1, 0, -1, -3, -5, -7]} | ${undefined}           | ${false}
    ${[3, 1, 0, -1, -3]}               | ${[3, 1, 0, -1, -3]}               | ${comparatorSpy}       | ${false}
    ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${comparatorObjectSpy} | ${undefined}
    ${[{ v: 5 }, { v: -5 }, { v: 0 }]} | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${comparatorObjectSpy} | ${true}
    ${[{ v: 5 }, { v: -5 }, { v: 0 }]} | ${[{ v: 5 }, { v: 0 }, { v: -5 }]} | ${comparatorObjectSpy} | ${false}
  `(
    "test: turn $value into $result",
    ({ value, result, comparator, order }) => {
      expect(insertionSort(value, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toBeCalled();
      }
    }
  );
});
