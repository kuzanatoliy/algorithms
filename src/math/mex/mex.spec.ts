import { mex } from './mex';

describe('mex', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    numbers                  | result
    ${[]}                    | ${0}
    ${[1, 2, 3]}             | ${0}
    ${[0, 2, 4, 6]}          | ${1}
    ${[0, 1, 4, 7, 12]}      | ${2}
    ${[0, 1, 2, 3]}          | ${4}
    ${[1n, 2n, 3n]}          | ${0n}
    ${[0n, 2n, 4n, 6n]}      | ${1n}
    ${[0n, 1n, 4n, 7n, 12n]} | ${2n}
    ${[0n, 1n, 2n, 3n]}      | ${4n}
  `('return mex element', ({ numbers, result }) => {
    expect(mex(...numbers)).toBe(result);
  });
});
