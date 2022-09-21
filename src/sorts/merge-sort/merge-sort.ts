import { defaultComparator } from '../utils';
import { ComparatorFn } from '../types';

export const mergeSort = <T = number>(arr: T[], comparator: ComparatorFn<T> = defaultComparator, order = true) => {
  if (arr.length > 1) {
    let middle = Math.floor(arr.length / 2),
      i = 0,
      j = 0,
      k = 0;
    const left = mergeSort(arr.slice(0, middle), comparator, order);
    const right = mergeSort(arr.slice(middle, arr.length), comparator, order);

    while (i < left.length && j < right.length) {
      if (order ? comparator(left[i] as T, right[j] as T) : comparator(right[j] as T, left[i] as T)) {
        arr[k] = left[i] as T;
        i++;
      } else {
        arr[k] = right[j] as T;
        j++;
      }
      k++;
    }
    while (i < left.length) {
      arr[k] = left[i] as T;
      k++;
      i++;
    }
    while (j < right.length) {
      arr[k] = right[j] as T;
      k++;
      j++;
    }
  }
  return arr;
};
