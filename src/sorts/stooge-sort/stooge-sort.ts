import { defaultComparator } from '../utils';
import { IComparatorFn } from '../types';

export const stoogeSort = <TItem = number>(
  arr: TItem[],
  comparator: IComparatorFn<TItem> = defaultComparator,
  order = true,
  first = 0,
  last = arr.length - 1
): TItem[] => {
  if (
    order
      ? comparator(arr[last]!, arr[first]!)
      : comparator(arr[first]!, arr[last]!)
  ) {
    const temp = arr[first]!;
    arr[first] = arr[last]!;
    arr[last] = temp;
  }
  if (last - first > 1) {
    const temp = Math.floor((last - first + 1) / 3);
    //console.log(first, last, temp);
    stoogeSort(arr, comparator, order, first, last - temp);
    stoogeSort(arr, comparator, order, first + temp, last);
    stoogeSort(arr, comparator, order, first, last - temp);
  }
  return arr;
};
