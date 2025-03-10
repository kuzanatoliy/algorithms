import { turnRomeNumberToNumber } from './turn-rome-number-to-number';

describe('turn rome number to number', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    num     | result
    ${10}   | ${'X'}
    ${2045} | ${'MMXLV'}
    ${523}  | ${'DXXIII'}
    ${968}  | ${'CMLXVIII'}
    ${444}  | ${'CDXLIV'}
    ${209}  | ${'CCIX'}
    ${96}   | ${'XCVI'}
  `('turn $num to $result', ({ num, result }) => {
    expect(turnRomeNumberToNumber(num)).toBe(result);
  });
});
