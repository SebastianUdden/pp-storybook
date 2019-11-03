export const getNumberWithSpaces = number => {
  const noDecimals =
    number.substring(number.length - 3, number.length) == ".00";
  return noDecimals
    ? number
        .substring(0, number.length - 3)
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const round = number => Math.round(number);
export const roundTwoDec = number => number.toFixed(2);
