import { comparatorSpy, comparatorObjectSpy } from './spies';

export const testCases = [
  {
    value: [],
    result: [],
    comparator: undefined,
    order: undefined,
  },
  {
    value: [10],
    result: [10],
    comparator: undefined,
    order: undefined,
  },
  {
    value: [-3, -1, 0, 1, 3],
    result: [-3, -1, 0, 1, 3],
    comparator: undefined,
    order: undefined,
  },
  {
    value: [7, -5, 3, -7, 0, -1, 5, 1, -3],
    result: [-7, -5, -3, -1, 0, 1, 3, 5, 7],
    comparator: undefined,
    order: true,
  },
  {
    value: [3, 1, 0, -1, -3],
    result: [-3, -1, 0, 1, 3],
    comparator: comparatorSpy,
    order: true,
  },
  {
    value: [-3, -1, 0, 1, 3],
    result: [3, 1, 0, -1, -3],
    comparator: undefined,
    order: false,
  },
  {
    value: [7, -5, 3, -7, 0, -1, 5, 1, -3],
    result: [7, 5, 3, 1, 0, -1, -3, -5, -7],
    comparator: undefined,
    order: false,
  },
  {
    value: [3, 1, 0, -1, -3],
    result: [3, 1, 0, -1, -3],
    comparator: comparatorSpy,
    order: false,
  },
  {
    value: [{ v: -5 }, { v: 0 }, { v: 5 }],
    result: [{ v: -5 }, { v: 0 }, { v: 5 }],
    comparator: comparatorObjectSpy,
    order: undefined,
  },
  {
    value: [{ v: -5 }, { v: 0 }, { v: 5 }],
    result: [{ v: 5 }, { v: 0 }, { v: -5 }],
    comparator: comparatorObjectSpy,
    order: false,
  },
  {
    value: [{ v: 5 }, { v: -5 }, { v: 0 }],
    result: [{ v: -5 }, { v: 0 }, { v: 5 }],
    comparator: comparatorObjectSpy,
    order: true,
  },
];
