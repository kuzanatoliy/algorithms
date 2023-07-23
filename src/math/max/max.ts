function max(...numbers: number[]): number;
function max(...numbers: bigint[]): bigint;
function max(...numbers: any[]) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }

  return max;
}

export { max };
