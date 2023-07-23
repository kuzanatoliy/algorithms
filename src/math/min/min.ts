function min(...numbers: number[]): number;
function min(...numbers: bigint[]): bigint;
function min(...numbers: any[]) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }

  return min;
}

export { min };
