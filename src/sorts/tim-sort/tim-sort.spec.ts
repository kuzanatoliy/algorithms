import { timSort } from './tim-sort';
import { testCases } from '../test-utils';

describe('tim sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))(
    'test %s:',
    (_, { value, result, comparator, order }) => {
      expect(timSort(value, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toHaveBeenCalled();
      }
    }
  );
});
