import { quicksort } from './quicksort';
import { testCases } from '../test-utils';

describe('insertion sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))('test %s:', (_, { value, result, comparator, order }) => {
    expect(quicksort(value as any, comparator, order)).toEqual(result);
    if (comparator) {
      expect(comparator).toBeCalled();
    }
  });
});
