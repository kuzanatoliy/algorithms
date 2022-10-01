export type ComparatorFn<TItem = number> = (prev: TItem, curr: TItem) => boolean;

export type SortFn<TItem = number> = (arr: TItem[], comparator: ComparatorFn<TItem>, order: boolean) => TItem[];
