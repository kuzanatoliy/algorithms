import { triangularNumber } from './triangular-number';

describe('triangularNumber', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    number | result
    ${1}   | ${1}
    ${2}   | ${3}
    ${3}   | ${6}
    ${10}  | ${55}
    ${1n}  | ${1n}
    ${2n}  | ${3n}
    ${3n}  | ${6n}
    ${10n} | ${55n}
  `('return triangularNumber element', ({ number, result }) => {
    expect(triangularNumber(number)).toBe(result);
  });
});
