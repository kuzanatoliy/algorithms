export * from './spies';

export const comparatorSpy = jest
  .fn()
  .mockImplementation((prev: number, curr: number) => prev < curr);

export const comparatorObjectSpy = jest
  .fn()
  .mockImplementation(
    (prev: { v: number }, curr: { v: number }) => prev.v < curr.v
  );
