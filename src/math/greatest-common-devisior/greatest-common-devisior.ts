function greatestCommonDevisior(first: number, second: number): number;
function greatestCommonDevisior(first: bigint, second: bigint): bigint;
function greatestCommonDevisior(first: any, second: any) {
  let temp;

  while (first !== second) {
    temp = first % second;
    first = second;
    second = temp;
  }

  return first;
}

export { greatestCommonDevisior };
