import { insertionSort } from "./insertion-sort";

describe("insertion sort", () => {
  it.each`
    value                              | result
    ${[-3, -1, 0, 1, 3]}               | ${[-3, -1, 0, 1, 3]}
    ${[7, -5, 3, -7, 0, -1, 5, 1, -3]} | ${[-7, -5, -3, -1, 0, 1, 3, 5, 7]}
    ${[3, 1, 0, -1, -3]}               | ${[-3, -1, 0, 1, 3]}
  `("test: turn $value into $result", ({ value, result }) => {
    expect(insertionSort(value)).toEqual(result);
  });
});
