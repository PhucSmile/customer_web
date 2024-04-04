import { Md5 } from 'ts-md5';

export const reverseString = (str: string) => str.split('').reverse().join('');

export const encodeRFC3986URI = (str: string) =>
  encodeURI(str)
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']')
    .replace(/%7B/g, '{')
    .replace(/%7D/g, '}')
    .replace(
      /[!'()*]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );

    // Trình tạo chuỗi ngẫu nhiên
export const randomStringGenerator = (length: number = 0) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const missingNumberOrIncrement = (
  array: number[],
  defaultValue: number = 0,
) =>
  array?.length > 0
    ? [
        ...Array.from({ length: Math.max(...array) }, (_, index) => 1 + index),
      ].filter((value) => !array.includes(value))?.[0] ??
      Math.max(...array) + 1 ??
      defaultValue
    : defaultValue;

export const md5Hashing = (value: string) => Md5.hashStr(value);
