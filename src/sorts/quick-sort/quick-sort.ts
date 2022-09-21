import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const quickSort = <T = number>(
  arr: T[],
  comparator: ComparatorFn<T> = defaultComparator,
  order = true,
  first = 0,
  last = arr.length - 1
) => {
  if (first < last) {
    let i = first,
      count = 0,
      j = last,
      middle = Math.floor((i + j) / 2),
      temp;
    while (i < j) {
      count++;
      while (order ? comparator(arr[i]!, arr[middle]!) : comparator(arr[middle]!, arr[i]!)) {
        i++;
      }
      while (order ? comparator(arr[middle]!, arr[j]!) : comparator(arr[j]!, arr[middle]!)) {
        j--;
      }
      temp = arr[j];
      arr[j] = arr[i]!;
      arr[i] = temp!;
    }
    if (count > 1) {
      quickSort(arr, comparator, order, first, i);
      quickSort(arr, comparator, order, j, last);
    }
  }
  return arr;
};
