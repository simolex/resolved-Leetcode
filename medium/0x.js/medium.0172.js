/**
 * 172. Factorial Trailing Zeroes
 *
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function (n) {
    let count = 0;
    for (let i = 5; i <= n; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
};
