/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};
    this.forEach((item) => {
        const key = fn(item);
        if (result?.[key]) {
            result[key].push(item);
        } else {
            result[key] = [item];
        }
    });
    return result;
};
