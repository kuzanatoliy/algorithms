import { turnNumberToRomeNumber } from './turn-number-to-rome-number';

describe('turn number to rome number', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    num           | result
    ${'X'}        | ${10}
    ${'MMXLV'}    | ${2045}
    ${'DXXIII'}   | ${523}
    ${'CMLXVIII'} | ${968}
    ${'CDXLIV'}   | ${444}
    ${'CCIX'}     | ${209}
    ${'XCVI'}     | ${96}
  `('turn $num to $result', ({ num, result }) => {
    expect(turnNumberToRomeNumber(num)).toBe(result);
  });
});
