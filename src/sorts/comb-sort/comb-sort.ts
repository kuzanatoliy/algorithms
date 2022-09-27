import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

const SHRINK = 1.247;

export const combSort = <T = number>(arr: T[], comparator: ComparatorFn<T> = defaultComparator, order = true) => {
  let j: number,
    sh: number = arr.length,
    item: T;
  while (sh > 1) {
    sh = Math.floor(sh / SHRINK);
    for (j = 0; j + sh < arr.length; j++) {
      if (order ? comparator(arr[j + sh]!, arr[j]!) : comparator(arr[j]!, arr[j + sh]!)) {
        item = arr[j]!;
        arr[j] = arr[j + sh]!;
        arr[j + sh] = item;
      }
    }
  }
  return arr;
};
