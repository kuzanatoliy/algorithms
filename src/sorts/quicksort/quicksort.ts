import { defaultComparator } from "../utils";
import { ComparatorFn } from "../types";

export const quicksort = <T = number>(
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
      while (
        order
          ? comparator(arr[i] as T, arr[middle] as T)
          : comparator(arr[middle] as T, arr[i] as T)
      ) {
        i++;
      }
      while (
        order
          ? comparator(arr[middle] as T, arr[j] as T)
          : comparator(arr[j] as T, arr[middle] as T)
      ) {
        j--;
      }
      temp = arr[j];
      arr[j] = arr[i] as T;
      arr[i] = temp as T;
    }
    if (count > 1) {
      quicksort(arr, comparator, order, first, i);
      quicksort(arr, comparator, order, j, last);
    }
  }
  return arr;
};
