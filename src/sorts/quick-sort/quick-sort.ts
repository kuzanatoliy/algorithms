import { defaultComparator } from '../utils';
import { IComparatorFn } from '../types';

export const quickSort = <TItem = number>(
  arr: TItem[],
  comparator: IComparatorFn<TItem> = defaultComparator,
  order = true
): TItem[] => {
  if (arr.length > 1) {
    const pivot = arr[0]!;
    const left: TItem[] = [];
    const right: TItem[] = [];
    for (let i = 1; i < arr.length; i++) {
      if (order ? comparator(arr[i]!, pivot) : comparator(pivot, arr[i]!)) {
        left.push(arr[i]!);
      } else {
        right.push(arr[i]!);
      }
    }
    return quickSort(left, comparator, order).concat(
      pivot,
      quickSort(right, comparator, order)
    );
  }
  return arr;
};
