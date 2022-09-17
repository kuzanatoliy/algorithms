import { defaultComparator } from "./default-comparator";

describe("insertion sort", () => {
  it.each`
    value     | result
    ${[2, 6]} | ${true}
    ${[6, 2]} | ${false}
  `("test: turn $value into $result", ({ value, result }) => {
    expect(defaultComparator(value[0], value[1])).toEqual(result);
  });
});
