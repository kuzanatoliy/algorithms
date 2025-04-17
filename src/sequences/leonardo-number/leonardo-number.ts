function leonardoNumber(num: number) {
  if (num === 1) {
    return num;
  }
  let prev = 1,
    curr = 1,
    temp = 0;
  while (num > 2) {
    temp = curr + prev + 1;
    prev = curr;
    curr = temp;
    num--;
  }
  return curr;
}

export { leonardoNumber };
