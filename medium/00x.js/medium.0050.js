/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let result = 1;

    let step = n * Math.sign(n);
    while (step > 0) {
        if (step & 1) {
            result *= x;
        }
        x *= x;
        step = step >>> 1;
    }
    return Math.sign(n) === 1 ? result : 1 / result;
};

console.log(myPow(2.0, (n = 10)));
console.log(myPow(2.1, (n = 3)));
console.log(myPow(2.0, (n = -2)));
