const reverseNumber = (x) => {
  let numb = x;
  let reverseNumb = 0;
  while (numb > 0) {
    reverseNumb = reverseNumb * 10 + (numb % 10);
    numb = parseInt(numb / 10);
  }
  // Returning 0 since the reversed number is > 2^31
  if (reverseNumb > Math.pow(2, 31)) {
    return 0;
  }
  return parseInt(reverseNumb);
};

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x <= 9) return true;
  if (x < 100 && x % 11 === 0) return true;
  return reverseNumber(x) === x;
};
