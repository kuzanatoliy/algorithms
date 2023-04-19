function greatestCommonDevisior(first: number, second: number): number;
function greatestCommonDevisior(first: bigint, second: bigint): bigint;
function greatestCommonDevisior(first: any, second: any) {
  let temp = first % second;
  let flag = temp.constructor(0);

  while (temp !== flag) {
    first = second;
    second = temp;
    temp = first % second;
  }

  return second;
}

export { greatestCommonDevisior };
