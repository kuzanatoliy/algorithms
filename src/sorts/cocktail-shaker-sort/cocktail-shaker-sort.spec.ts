import { cocktailShakerSort } from './cocktail-shaker-sort';
import { testCases } from '../test-utils';

describe('cocktail shaker sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))('test %s:', (_, { value, result, comparator, order }) => {
    expect(cocktailShakerSort(value as any, comparator, order)).toEqual(result);
    if (comparator) {
      expect(comparator).toBeCalled();
    }
  });
});
