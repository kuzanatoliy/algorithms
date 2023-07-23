import { min } from './min';

describe('min', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each`
    numbers
    ${[-6, 12, -4, 0, 5, 12, -12, 3, 8, 13]}
    ${[-6n, 12n, -4n, 0n, 5n, 12n, -12n, 3n, 8n, 13n]}
  `('return min element', ({ numbers }) => {
    expect(min(...numbers)).toBe(numbers[6]);
  });
});
