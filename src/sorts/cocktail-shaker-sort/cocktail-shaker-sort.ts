import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const cocktailShakerSort = <TItem = number>(
  arr: TItem[],
  comparator: ComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  let i: number, ii: number, j: number, item: TItem;
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
