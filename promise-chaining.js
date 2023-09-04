/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
  return Promise.all([promise1, promise2]).then((values) => {
    let total = 0;
    values.forEach((value) => total += value);
    return total;
  })
};