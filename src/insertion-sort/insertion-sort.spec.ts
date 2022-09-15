import { insertionSort } from "./insertion-sort";

describe("insertion sort", () => {
  it.each`
    value        | result
    ${[1, 3, 2]} | ${[1, 2, 3]}
  `("test: turn $value into $result", ({ value, result }) => {
    expect(insertionSort(value)).toEqual(result);
  });
});
