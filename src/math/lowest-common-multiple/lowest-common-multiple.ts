import { greatestCommonDevisior } from '../greatest-common-devisior';

function lowestCommonMultiple(first: number, second: number): number;
function lowestCommonMultiple(first: bigint, second: bigint): bigint;
function lowestCommonMultiple(first: any, second: any) {
  return first.constructor(
    (first * second) / greatestCommonDevisior(first, second)
  );
}

export { lowestCommonMultiple };
