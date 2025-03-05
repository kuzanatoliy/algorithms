import { binarySearch } from './binary-search';

describe('bubble sort', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const comparatorSpy = jest
    .fn()
    .mockImplementation((prev: number, curr: number) =>
      prev === curr ? 0 : prev > curr ? 1 : -1
    );

  const comparatorObjectSpy = jest
    .fn()
    .mockImplementation((prev: { v: number }, curr: { v: number }) =>
      prev.v === curr.v ? 0 : prev.v > curr.v ? 1 : -1
    );

  const testCases = [
    {
      array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      value: 7,
      result: 7,
      order: undefined,
      comparator: undefined,
    },
    {
      array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      value: 17,
      result: 17,
      order: undefined,
      comparator: undefined,
    },
    {
      array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      value: 4,
      result: null,
      order: undefined,
      comparator: comparatorSpy,
    },
    {
      array: [19, 17, 15, 13, 11, 9, 7, 5, 3, 1],
      value: 7,
      result: 7,
      order: false,
      comparator: comparatorSpy,
    },
    {
      array: [19, 17, 15, 13, 11, 9, 7, 5, 3, 1],
      value: 17,
      result: 17,
      order: false,
      comparator: comparatorSpy,
    },
    {
      array: [19, 17, 15, 13, 11, 9, 7, 5, 3, 1],
      value: 4,
      result: null,
      order: false,
      comparator: comparatorSpy,
    },
    {
      array: [11],
      value: 11,
      result: 11,
      order: true,
      comparator: comparatorSpy,
    },
    {
      array: [
        { v: 1 },
        { v: 3 },
        { v: 5 },
        { v: 7 },
        { v: 9 },
        { v: 11 },
        { v: 13 },
        { v: 15 },
        { v: 17 },
        { v: 19 },
      ],
      value: { v: 7 },
      result: { v: 7 },
      order: undefined,
      comparator: comparatorObjectSpy,
    },
    {
      array: [
        { v: 1 },
        { v: 3 },
        { v: 5 },
        { v: 7 },
        { v: 9 },
        { v: 11 },
        { v: 13 },
        { v: 15 },
        { v: 17 },
        { v: 19 },
      ],
      value: { v: 17 },
      result: { v: 17 },
      order: undefined,
      comparator: comparatorObjectSpy,
    },
    {
      array: [
        { v: 1 },
        { v: 3 },
        { v: 5 },
        { v: 7 },
        { v: 9 },
        { v: 11 },
        { v: 13 },
        { v: 15 },
        { v: 17 },
        { v: 19 },
      ],
      value: { v: 4 },
      result: null,
      order: undefined,
      comparator: comparatorObjectSpy,
    },
    {
      array: [
        { v: 19 },
        { v: 17 },
        { v: 15 },
        { v: 13 },
        { v: 11 },
        { v: 9 },
        { v: 7 },
        { v: 5 },
        { v: 3 },
        { v: 1 },
      ],
      value: { v: 7 },
      result: { v: 7 },
      order: false,
      comparator: comparatorObjectSpy,
    },
    {
      array: [
        { v: 19 },
        { v: 17 },
        { v: 15 },
        { v: 13 },
        { v: 11 },
        { v: 9 },
        { v: 7 },
        { v: 5 },
        { v: 3 },
        { v: 1 },
      ],
      value: { v: 17 },
      result: { v: 17 },
      order: false,
      comparator: comparatorObjectSpy,
    },
    {
      array: [
        { v: 19 },
        { v: 17 },
        { v: 15 },
        { v: 13 },
        { v: 11 },
        { v: 9 },
        { v: 7 },
        { v: 5 },
        { v: 3 },
        { v: 1 },
      ],
      value: { v: 4 },
      result: null,
      order: false,
      comparator: comparatorObjectSpy,
    },
    {
      array: [{ v: 11 }],
      value: { v: 11 },
      result: { v: 11 },
      order: true,
      comparator: comparatorObjectSpy,
    },
  ];

  it.each(Object.entries(testCases))(
    'test %s:',
    (_, { array, value, result, order, comparator }) => {
      expect(binarySearch(array, value, comparator, order)).toEqual(result);
      if (comparator) {
        expect(comparator).toHaveBeenCalled();
      }
    }
  );
});
