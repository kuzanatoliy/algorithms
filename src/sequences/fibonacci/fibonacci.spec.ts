import { fibonacci } from './fibonacci';

describe('febonacci', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    num   | result
    ${1}  | ${1}
    ${2}  | ${1}
    ${4}  | ${3}
    ${10} | ${55}
    ${15} | ${610}
  `('should return $num number in fibonacci sequences', ({ num, result }) => {
    expect(fibonacci(num)).toBe(result);
  });
});
