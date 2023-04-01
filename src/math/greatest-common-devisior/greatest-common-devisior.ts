const NUMBER_TYPE = 'number';

function greatestCommonDevisior(first: number, second: number): number;
function greatestCommonDevisior(first: bigint, second: bigint): bigint;
function greatestCommonDevisior(first: any, second: any) {
  let temp = first % second;
  let flag = typeof first === NUMBER_TYPE ? 0 : 0n;

  while (temp !== flag) {
    first = second;
    second = temp;
    temp = first % second;
  }

  return second;
}

export { greatestCommonDevisior };
