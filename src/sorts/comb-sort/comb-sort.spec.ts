import { combSort } from './comb-sort';
import { testCases } from '../test-utils';

describe('comb sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))('test %s:', (_, { value, result, comparator, order }) => {
    expect(combSort(value as any, comparator, order)).toEqual(result);
    if (comparator) {
      expect(comparator).toBeCalled();
    }
  });
});
