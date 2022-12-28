export const binarySearch = <TItem = number>(arr: TItem[], value: TItem) => {
  let first = 0,
    last = arr.length - 1,
    middle = Math.floor((last - first) / 2);
  while (true) {
    if (arr[middle]! === value) {
      return arr[middle]!;
    } else if (last - first <= 0) {
      return null;
    } else if (arr[middle]! > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
    console.log(first, last);
    middle = first + Math.floor((last - first) / 2);
  }
};
