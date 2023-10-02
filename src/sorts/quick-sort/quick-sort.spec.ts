import { quickSort } from './quick-sort';
import { testCases } from '../test-utils';

describe('quick sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))(
    'test %s:',
    (_, { value, result, comparator, order }) => {
      expect(quickSort(value as any, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toBeCalled();
      }
    }
  );
});
