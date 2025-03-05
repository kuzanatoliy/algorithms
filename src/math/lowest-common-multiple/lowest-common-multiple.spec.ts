import { lowestCommonMultiple } from './lowest-common-multiple';

describe('lowest common multiple', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    first  | second | result
    ${10}  | ${10}  | ${10}
    ${90}  | ${84}  | ${1260}
    ${28}  | ${15}  | ${420}
    ${24}  | ${18}  | ${72}
    ${10n} | ${10n} | ${10n}
    ${90n} | ${84n} | ${1260n}
    ${28n} | ${15n} | ${420n}
    ${24n} | ${18n} | ${72n}
  `(
    'result with $first and $second values should be $result',
    ({ first, second, result }) => {
      expect(lowestCommonMultiple(first, second)).toBe(result);
    }
  );
});
