export type ComparatorFn<T = number> = (prev: T, curr: T) => boolean;

export type SortFn<T = number> = (
  arr: T[],
  comparator: ComparatorFn<T>,
  order: boolean
) => T[];
