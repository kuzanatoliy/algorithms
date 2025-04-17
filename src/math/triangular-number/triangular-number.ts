function triangleNumber(number: number): number;
function triangleNumber(number: bigint): bigint;
function triangleNumber<TValue extends number | bigint = number>(
  number: TValue
) {
  return number.constructor(
    (number * (number + number.constructor(1))) / number.constructor(2)
  );
}

export { triangleNumber };
