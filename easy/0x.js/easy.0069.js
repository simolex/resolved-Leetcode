/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    const delta = 10 ** -9;
    let left = 1;
    let right = x;
    let mid;
    while (right - left > delta) {
        mid = left + (right - left) / 2;
        if (x / mid < mid) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return Math.floor(right);
};

console.log(mySqrt(4));
console.log(mySqrt(9));
console.log(mySqrt(3));
console.log(mySqrt(2147395599));
