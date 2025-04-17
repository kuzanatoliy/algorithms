import { leonardoNumber } from './leonardo-number';

describe('leonardo-number', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    num   | result
    ${1}  | ${1}
    ${2}  | ${3}
    ${4}  | ${9}
    ${10} | ${177}
    ${15} | ${1973}
  `(
    'should return $num number in leonardoNumber sequences',
    ({ num, result }) => {
      expect(leonardoNumber(num)).toBe(result);
    }
  );
});
