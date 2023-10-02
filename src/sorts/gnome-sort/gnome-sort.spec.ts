import { gnomeSort } from './gnome-sort';
import { testCases } from '../test-utils';

describe('gnome sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(Object.entries(testCases))(
    'test %s:',
    (_, { value, result, comparator, order }) => {
      expect(gnomeSort(value as any, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toBeCalled();
      }
    }
  );
});
