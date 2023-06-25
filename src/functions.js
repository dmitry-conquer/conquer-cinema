export const id = () => {
  const arr = new Int32Array(1);
  return Math.abs(window.crypto.getRandomValues(arr)[0]);
};

export const normalizedDate = date => {
  return new Date(date).getFullYear();
};
export const normalizedRate = rate => {
  return rate.toFixed(1);
};
