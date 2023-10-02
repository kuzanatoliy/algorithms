type IComparatorFn<TItem = number> = (prev: TItem, curr: TItem) => -1 | 0 | 1;

const defaultComparator = <TItem = number>(prev: TItem, curr: TItem) =>
  prev === curr ? 0 : prev > curr ? 1 : -1;

export const binarySearch = <TItem = number>(
  arr: TItem[],
  value: TItem,
  comparator: IComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  let first = 0,
    last = arr.length - 1,
    middle = Math.floor((last - first) / 2);
  while (true) {
    const val = order
      ? comparator(arr[middle]!, value)
      : comparator(value, arr[middle]!);
    if (val === 0) {
      return arr[middle]!;
    } else if (last - first <= 0) {
      return null;
    } else if (val > 0) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
    middle = first + Math.floor((last - first) / 2);
  }
};
