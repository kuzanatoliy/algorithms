import { I, V, X, L, C, D, M } from './rome.constants';

export const turnRomeNumberToNumber = (num: number) => {
  let res = '';
  while (num >= M) {
    res += 'M';
    num -= M;
  }
  if (num >= M - C) {
    res += 'CM';
    num -= M - C;
  }
  if (num >= D) {
    res += 'D';
    num -= D;
  }
  if (num >= D - C) {
    res += 'CD';
    num -= D - C;
  }
  while (num >= C) {
    res += 'C';
    num -= C;
  }
  if (num >= C - X) {
    res += 'XC';
    num -= C - X;
  }
  if (num >= L) {
    res += 'L';
    num -= L;
  }
  if (num >= L - X) {
    res += 'XL';
    num -= L - X;
  }
  while (num >= X) {
    res += 'X';
    num -= X;
  }
  if (num >= X - I) {
    res += 'IX';
    num -= X - I;
  }
  if (num >= V) {
    res += 'V';
    num -= V;
  }
  if (num >= V - I) {
    res += 'IV';
    num -= V - I;
  }
  while (num >= I) {
    res += 'I';
    num -= I;
  }
  return res;
};
