import { defaultComparator } from '../utils';
import { IComparatorFn } from '../types';

export const mergeSort = <TItem = number>(
  arr: TItem[],
  comparator: IComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  if (arr.length > 1) {
    let middle = Math.floor(arr.length / 2),
      i = 0,
      j = 0,
      k = 0;
    const left = mergeSort(arr.slice(0, middle), comparator, order);
    const right = mergeSort(arr.slice(middle, arr.length), comparator, order);

    while (i < left.length && j < right.length) {
      if (order ? comparator(left[i]!, right[j]!) : comparator(right[j]!, left[i]!)) {
        arr[k] = left[i]!;
        i++;
      } else {
        arr[k] = right[j]!;
        j++;
      }
      k++;
    }
    while (i < left.length) {
      arr[k] = left[i]!;
      k++;
      i++;
    }
    while (j < right.length) {
      arr[k] = right[j]!;
      k++;
      j++;
    }
  }
  return arr;
};
