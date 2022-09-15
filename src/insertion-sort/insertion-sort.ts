export const insertionSort = (arr: number[]) => {
  let i, j, item;
  for (i = 1; i < arr.length; i++) {
    item = arr[i] as number;
    for (j = i; j > 0 && item < (arr[j - 1] as number); j--) {
      arr[j] = arr[j - 1] as number;
    }
    arr[j] = item;
  }
  return arr;
};
