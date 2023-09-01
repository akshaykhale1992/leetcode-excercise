const reverse = (x) => {
  const isNegative = x < 0;
  let numb = isNegative ? x * -1 : x;
  let reverseNumb = 0;
  while (numb > 0) {
    reverseNumb = (reverseNumb * 10) + numb % 10;
    numb = parseInt(numb / 10);
  }
  if (reverseNumb > Math.pow(2, 31)) {
    return 0;
  }
  return parseInt(reverseNumb * (isNegative ? -1 : 1));
};
