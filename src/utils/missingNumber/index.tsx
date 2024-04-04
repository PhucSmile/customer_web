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
