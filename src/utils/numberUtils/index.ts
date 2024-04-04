export const CompactNumber = (number: number) => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(number);
};

export const formatCurrencyVN = (price: number) => {
  return price?.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export const roundUp = (number: number) => {
  return Math.ceil(number);
};
