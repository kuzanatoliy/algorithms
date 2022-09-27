import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const bubbleSort = <T = number>(arr: T[], comparator: ComparatorFn<T> = defaultComparator, order = true) => {
  let i: number, j: number, item: T;
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length - i; j++) {
      if (order ? comparator(arr[j]!, arr[j - 1]!) : comparator(arr[j - 1]!, arr[j]!)) {
        item = arr[j]!;
        arr[j] = arr[j - 1]!;
        arr[j - 1] = item;
      }
    }
  }
  return arr;
};
