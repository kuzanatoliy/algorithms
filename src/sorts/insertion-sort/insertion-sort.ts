import { defaultComparator } from "../utils";
import { ComparatorFn } from "../types";

export const insertionSort = <T = number>(
  arr: T[],
  comparator: ComparatorFn<T> = defaultComparator,
  order = true
) => {
  let i: number, j: number, item: T;
  for (i = 1; i < arr.length; i++) {
    item = arr[i] as T;
    for (
      j = i;
      j > 0 &&
      (order
        ? comparator(item, arr[j - 1] as T)
        : !comparator(item, arr[j - 1] as T));
      j--
    ) {
      arr[j] = arr[j - 1] as T;
    }
    arr[j] = item;
  }
  return arr;
};
