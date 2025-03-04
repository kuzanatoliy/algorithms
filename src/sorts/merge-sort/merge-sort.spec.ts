import { mergeSort } from './merge-sort';
import { testCases } from '../test-utils';

describe('merge sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))(
    'test %s:',
    (_, { value, result, comparator, order }) => {
      expect(mergeSort(value, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toHaveBeenCalled();
      }
    }
  );
});
