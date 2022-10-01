export const defaultComparator = <TItem = number>(prev: TItem, curr: TItem) => {
  return prev < curr;
};
