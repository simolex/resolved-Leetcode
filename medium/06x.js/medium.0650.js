/**
 * 650. 2 Keys Keyboard
 *
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    let newResult = 0;
    let divisor = 2;
    while (n > 1) {
        while (n % divisor === 0) {
            newResult += divisor;
            n /= divisor;
        }
        divisor++;
    }
    return newResult;
};

console.log(min(3));
console.log(min(1));
console.log(min(2));
console.log(min(3));
console.log(min(4));
console.log(min(5));
console.log(min(6));
console.log(min(7));
console.log(min(8));
console.log(min(9));
console.log(min(10));
console.log(min(11));
console.log(min(12));
console.log(min(13));
console.log(min(14));
console.log(min(15));
