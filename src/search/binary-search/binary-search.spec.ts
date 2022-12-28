import { binarySearch } from './binary-search';

describe('bubble sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const testCases = [
    {
      array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      value: 7,
      result: 7,
    },
    {
      array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      value: 17,
      result: 17,
    },
    {
      array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      value: 4,
      result: null,
    },
    {
      array: [11],
      value: 11,
      result: 11,
    },
  ];

  it.each(Object.entries(testCases))('test %s:', (_, { array, value, result }) => {
    expect(binarySearch(array, value)).toEqual(result);
  });
});
