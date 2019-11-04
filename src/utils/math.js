export const sum = (a, b) => {
  return a + b;
};

export const getRelativePosition = (value, minValue, maxValue) =>
  (value - minValue) / (maxValue - minValue);

export const getPercentageOfTotal = (num, total) => (num * total) / 100;
