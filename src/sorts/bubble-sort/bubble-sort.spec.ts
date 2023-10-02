import { bubbleSort } from './bubble-sort';
import { testCases } from '../test-utils';

describe('bubble sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))(
    'test %s:',
    (_, { value, result, comparator, order }) => {
      expect(bubbleSort(value as any, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toBeCalled();
      }
    }
  );
});
