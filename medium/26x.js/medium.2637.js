/**
 * 2637. Promise Time Limit
 *
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((res, rej) => {
            setTimeout(rej, t, "Time Limit Exceeded");
            fn(...args).then(res, rej);
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
