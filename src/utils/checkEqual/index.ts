import { isEqual, isEqualReact } from '@react-hookz/deep-equal/esnext';

export const checkEqual = (value1: any, value2: any) => isEqual(value1, value2);
export const checkEqualReact = (value1: any, value2: any) =>
  isEqualReact(value1, value2);
