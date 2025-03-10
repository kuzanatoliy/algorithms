import { I, V, X, L, C, D, M } from './rome-numbers.constants';

export const turnNumberToRomeNumber = (num: string) => {
  let res = 0;
  for (let j = 0; j < num.length; j++) {
    if (num[j] === 'M') {
      res += M;
    } else if (num[j] === 'C' && num[j + 1] === 'M') {
      res += M - C;
      j++;
    } else if (num[j] === 'D') {
      res += D;
    } else if (num[j] === 'C' && num[j + 1] === 'D') {
      res += D - C;
      j++;
    } else if (num[j] === 'C') {
      res += C;
    } else if (num[j] === 'X' && num[j + 1] === 'C') {
      res += C - X;
      j++;
    } else if (num[j] === 'L') {
      res += L;
    } else if (num[j] === 'X' && num[j + 1] === 'L') {
      res += L - X;
      j++;
    } else if (num[j] === 'X') {
      res += X;
    } else if (num[j] === 'I' && num[j + 1] === 'X') {
      res += X - I;
      j++;
    } else if (num[j] === 'V') {
      res += V;
    } else if (num[j] === 'I' && num[j + 1] === 'V') {
      res += V - I;
      j++;
    } else if (num[j] === 'I') {
      res += I;
    }
  }
  return res;
};
