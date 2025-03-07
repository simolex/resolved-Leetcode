/**
 * 66. Plus One
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let index = digits.length - 1;
    while (index >= 0) {
        if (digits[index] < 9) {
            digits[index]++;
            return digits;
        }

        digits[index] = 0;
        index--;
    }
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
