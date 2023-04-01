import { defaultComparator } from '../utils';
import { IComparatorFn } from '../types';

export const insertionSort = <TItem = number>(
  arr: TItem[],
  comparator: IComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  let i: number, j: number, item: TItem;
  for (i = 1; i < arr.length; i++) {
    item = arr[i]!;
    for (j = i; j > 0 && (order ? comparator(item, arr[j - 1]!) : comparator(arr[j - 1]!, item)); j--) {
      arr[j] = arr[j - 1]!;
    }
    arr[j] = item;
  }
  return arr;
};
