export const squareCalc = (defaultValue, newValue) => {
  let result = Math.pow(newValue, 2) / Math.pow(defaultValue, 2);
  result = result.toFixed(3);
  return result;
};

export const circleCalc = (defaultValue, newValue) => {
  const value1 = newValue * 0.5;
  const value2 = defaultValue * 0.5;
  let result = (Math.pow(value1, 2) * 3.1415) / (Math.pow(value2, 2) * 3.1415);
  result = result.toFixed(3);
  return result;
};
