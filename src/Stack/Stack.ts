export class Stack<T = number> {
  private store: T[];

  constructor() {
    this.store = [];
  }

  public push(item: T): void {
    this.store[this.store.length] = item;
  }

  public put(): T | null {
    if (this.store.length) {
      const item = this.store[this.store.length - 1];
      this.store.length--;
      return item!;
    }
    return null;
  }

  get length(): number {
    return this.store.length;
  }
}
