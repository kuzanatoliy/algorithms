import { Stack } from './Stack';

describe('Stack', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('init state', () => {
    const stack = new Stack();
    expect(stack.length).toBe(0);
    expect(stack.pop()).toBeNull();
  });

  it('work flow', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(5);
    expect(stack.length).toBe(2);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(1);
  });
});
