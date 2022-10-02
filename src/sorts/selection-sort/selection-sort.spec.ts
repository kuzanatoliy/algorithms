import { selectionSort } from './selection-sort';
import { testCases } from '../test-utils';

describe('selection sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))('test %s:', (_, { value, result, comparator, order }) => {
    expect(selectionSort(value as any, comparator, order)).toEqual(result);
    if (comparator) {
      expect(comparator).toBeCalled();
    }
  });
});
