import { Queue } from './Queue';

describe('Queue', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('init state', () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    expect(queue.pop()).toBeNull();
  });

  it('work flow', () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(5);
    expect(queue.length).toBe(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(5);
  });
});
