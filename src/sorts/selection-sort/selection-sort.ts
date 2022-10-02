import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const selectionSort = <TItem = number>(
  arr: TItem[],
  comparator: ComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  let i: number, j: number, temp: number, item: TItem;
  for (i = 0; i < arr.length; i++) {
    temp = i;
    for (j = i + 1; j < arr.length; j++) {
      if (order ? comparator(arr[j]!, arr[temp]!) : comparator(arr[temp]!, arr[j]!)) {
        temp = j;
      }
    }
    item = arr[i]!;
    arr[i] = arr[temp]!;
    arr[temp] = item;
  }
  return arr;
};
