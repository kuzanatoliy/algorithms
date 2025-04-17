function triangularNumber(number: number): number;
function triangularNumber(number: bigint): bigint;
function triangularNumber<TValue extends number | bigint = number>(
  number: TValue
) {
  return number.constructor(
    (number * (number + number.constructor(1))) / number.constructor(2)
  );
}

export { triangularNumber };
