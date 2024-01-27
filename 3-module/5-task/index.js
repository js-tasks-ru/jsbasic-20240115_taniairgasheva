function getMinMax(str) {
  str = str.split(" ").filter((num) => Number(num));
  let result = {
    min: Math.min(...str),
    max: Math.max(...str),
  };

  return result;
}
