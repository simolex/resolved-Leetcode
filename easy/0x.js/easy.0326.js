/**
 * 326. Power of Three
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let current = 1;

    while (current < n) {
        current *= 3;
    }

    return n === current;
};

var isPowerOfThree = function (n) {
    if (n < 1) return false;

    let power = Math.round(Math.log(n) / Math.log(3), 0);

    return n === Math.pow(3, power);
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
