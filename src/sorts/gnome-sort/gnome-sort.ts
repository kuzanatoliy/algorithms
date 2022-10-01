import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const gnomeSort = <TItem = number>(
  arr: TItem[],
  comparator: ComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  let i: number = 1,
    item: TItem;
  while (i < arr.length) {
    if (order ? comparator(arr[i - 1]!, arr[i]!) : comparator(arr[i]!, arr[i - 1]!)) {
      i++;
    } else {
      item = arr[i]!;
      arr[i] = arr[i - 1]!;
      arr[i - 1] = item;
      if (i > 1) {
        i--;
      }
    }
  }
  return arr;
};
