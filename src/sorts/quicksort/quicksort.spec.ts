import { quicksort } from "./quicksort";

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
    number | value                              | result                             | comparator             | order
    ${1}   | ${[-3, -1, 0, 1, 3]}               | ${[-3, -1, 0, 1, 3]}               | ${undefined}           | ${undefined}
    ${2}   | ${[7, -5, 3, -7, 0, -1, 5, 1, -3]} | ${[-7, -5, -3, -1, 0, 1, 3, 5, 7]} | ${undefined}           | ${true}
    ${3}   | ${[3, 1, 0, -1, -3]}               | ${[-3, -1, 0, 1, 3]}               | ${comparatorSpy}       | ${true}
    ${4}   | ${[-3, -1, 0, 1, 3]}               | ${[3, 1, 0, -1, -3]}               | ${undefined}           | ${false}
    ${5}   | ${[7, -5, 3, -7, 0, -1, 5, 1, -3]} | ${[7, 5, 3, 1, 0, -1, -3, -5, -7]} | ${undefined}           | ${false}
    ${6}   | ${[3, 1, 0, -1, -3]}               | ${[3, 1, 0, -1, -3]}               | ${comparatorSpy}       | ${false}
    ${7}   | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${comparatorObjectSpy} | ${undefined}
    ${8}   | ${[{ v: 5 }, { v: -5 }, { v: 0 }]} | ${[{ v: -5 }, { v: 0 }, { v: 5 }]} | ${comparatorObjectSpy} | ${true}
    ${9}   | ${[{ v: 5 }, { v: -5 }, { v: 0 }]} | ${[{ v: 5 }, { v: 0 }, { v: -5 }]} | ${comparatorObjectSpy} | ${false}
  `("test $number:", ({ value, result, comparator, order }) => {
    expect(quicksort(value, comparator, order)).toEqual(result);
    if (comparator) {
      expect(comparator).toBeCalled();
    }
  });
});
