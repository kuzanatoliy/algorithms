export class Queue<T = number> {
  private store: T[];

  constructor() {
    this.store = [];
  }

  public push(item: T): void {
    this.store.push(item);
  }

  public pop(): T | null {
    return this.store.shift() ?? null;
  }

  get length(): number {
    return this.store.length;
  }
}
