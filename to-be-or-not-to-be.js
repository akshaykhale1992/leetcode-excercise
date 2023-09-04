/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  return {
    toBe: (checkVal) => {
      if (val === checkVal)
        return true;
      throw new Error('Not Equal');
    },
    notToBe: (checkVal) => {
      if (val !== checkVal)
        return true;
      throw new Error('Equal');
    }
  }
};
