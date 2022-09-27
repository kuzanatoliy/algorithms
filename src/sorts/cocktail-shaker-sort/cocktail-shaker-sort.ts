import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const cocktailShakerSort = <T = number>(
  arr: T[],
  comparator: ComparatorFn<T> = defaultComparator,
  order = true
) => {
  let i: number, ii: number, j: number, item: T;
  for (i = 0, ii = arr.length - 1; i < ii; i++, ii--) {
    for (j = 1; j <= ii; j++) {
      if (order ? comparator(arr[j]!, arr[j - 1]!) : comparator(arr[j - 1]!, arr[j]!)) {
        item = arr[j]!;
        arr[j] = arr[j - 1]!;
        arr[j - 1] = item;
      }
    }
    for (j = ii; j > i; j--) {
      if (order ? comparator(arr[j]!, arr[j - 1]!) : comparator(arr[j - 1]!, arr[j]!)) {
        item = arr[j]!;
        arr[j] = arr[j - 1]!;
        arr[j - 1] = item;
      }
    }
  }
  return arr;
};
