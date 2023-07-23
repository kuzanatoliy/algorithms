import { max } from './max';

describe('max', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    numbers
    ${[-6, 12, -4, 0, 5, 15, -12, 3, 8, 13]}
    ${[-6n, 12n, -4n, 0n, 5n, 15n, -12n, 3n, 8n, 13n]}
  `('return max element', ({ numbers }) => {
    expect(max(...numbers)).toBe(numbers[5]);
  });
});
