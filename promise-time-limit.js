const timeLimit = (fn, t) => {
    return async function (...args) {
        // Original Promise Function
        const promise = fn(...args);

        // Function to reject promise after timeout
        const timeOutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        });

        // race method which returns first settled promise data.
        return Promise.race([promise, timeOutPromise]);
    }
};