/**
 * 2623. Memoize
 *
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const hashMap = new Map();
    return function (...args) {
        const hash = JSON.stringify(args);
        if (hashMap.has(hash)) {
            return hashMap.get(hash);
        }
        const result = fn(...args);
        hashMap.set(hash, result);
        return result;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
