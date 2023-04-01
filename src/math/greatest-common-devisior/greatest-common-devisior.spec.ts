import { greatestCommonDevisior } from './greatest-common-devisior';

describe('greatest common devisior', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    first  | second | result
    ${10}  | ${10}  | ${10}
    ${90}  | ${84}  | ${6}
    ${28}  | ${15}  | ${1}
    ${24}  | ${18}  | ${6}
    ${10n} | ${10n} | ${10n}
    ${90n} | ${84n} | ${6n}
    ${28n} | ${15n} | ${1n}
    ${24n} | ${18n} | ${6n}
  `('result with $first and $second values should be $result', ({ first, second, result }) => {
    expect(greatestCommonDevisior(first, second)).toBe(result);
  });
});
