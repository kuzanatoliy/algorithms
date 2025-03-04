import { defaultComparator } from '../utils';
import { IComparatorFn } from '../types';
import { insertionSort } from '../insertion-sort';

const getMinrun = (n: number) => {
  let r = 0;
  while (n >= 64) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
};

export const timSort = <TItem = number>(
  arr: TItem[],
  comparator: IComparatorFn<TItem> = defaultComparator,
  order = true
) => {
  const minrun = getMinrun(arr.length);
  if (minrun >= arr.length) {
    return insertionSort(arr, comparator, order);
  }
  let first = 0;
  const temp = [];
  while (first < arr.length) {
    let last = first + 1;
    if (comparator(arr[first]!, arr[last]!)) {
      while (last + 1 < arr.length && comparator(arr[last]!, arr[last + 1]!)) {
        last++;
      }
      last = Math.max(last, first + minrun);
      temp.push(arr.slice(first, last));
    } else {
      while (last + 1 < arr.length && !comparator(arr[last]!, arr[last + 1]!)) {
        last++;
      }
      last = Math.max(last, first + minrun);
      temp.push(arr.slice(first, last).reverse());
    }
    first = last;
  }
  let sortedArr = insertionSort(temp[0]!, comparator, order);
  for (let ind = 1; ind < temp.length; ind++) {
    let i = 0,
      j = 0,
      k = 0;
    const ans = [];
    const next = insertionSort(temp[ind]!, comparator, order);
    while (i < sortedArr.length && j < next.length) {
      if (
        order
          ? comparator(sortedArr[i]!, next[j]!)
          : comparator(next[j]!, sortedArr[i]!)
      ) {
        ans[k] = sortedArr[i]!;
        i++;
      } else {
        ans[k] = next[j]!;
        j++;
      }
      k++;
    }
    while (i < sortedArr.length) {
      ans[k] = sortedArr[i]!;
      k++;
      i++;
    }
    while (j < next.length) {
      ans[k] = next[j]!;
      k++;
      j++;
    }
    sortedArr = ans;
  }
  return sortedArr;
};
