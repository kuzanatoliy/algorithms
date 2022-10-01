export class Queue<TItem = number> {
  private store: TItem[];

  constructor() {
    this.store = [];
  }

  public push(item: TItem): void {
    this.store.push(item);
  }

  public pop(): TItem | null {
    return this.store.shift() ?? null;
  }

  get length(): number {
    return this.store.length;
  }
}
