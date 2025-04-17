function mex(...numbers: number[]): number;
function mex(...numbers: bigint[]): bigint;
function mex(...numbers: any[]) {
  if (numbers.length === 0) {
    return numbers[0].constructor(0);
  }

  for (let i = 0; i < numbers.length; i++) {
    const temp = numbers[i].constructor(i);
    if (numbers[i] !== temp) {
      return temp;
    }
  }

  return numbers[0].constructor(numbers.length);
}

export { mex };
