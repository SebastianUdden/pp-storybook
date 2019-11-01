export const getNumberWithSpaces = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const round = number => Math.round(number);
export const roundTwoDec = number => number.toFixed(2);
