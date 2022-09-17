export type ComparatorFn<T = number> = (prev: T, curr: T) => boolean;

export type SortFn<T = number> = (arr: T[], comparator: ComparatorFn<T>) => T[];

const defaultComparator = <T = number>(prev: T, curr: T) => {
  return prev < curr;
};

export const insertionSort = <T = number>(
  arr: T[],
  comparator: ComparatorFn<T> = defaultComparator
) => {
  let i: number, j: number, item: T;
  for (i = 1; i < arr.length; i++) {
    item = arr[i] as T;
    for (j = i; j > 0 && comparator(item, arr[j - 1] as T); j--) {
      arr[j] = arr[j - 1] as T;
    }
    arr[j] = item;
  }
  return arr;
};
