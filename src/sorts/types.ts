export type IComparatorFn<TItem = number> = (
  prev: TItem,
  curr: TItem
) => boolean;

export type ISortFn<TItem = number> = (
  arr: TItem[],
  comparator: IComparatorFn<TItem>,
  order: boolean
) => TItem[];
