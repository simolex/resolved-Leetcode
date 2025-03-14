/**
 * 201. Bitwise AND of Numbers Range
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var rangeBitwiseAnd = function (left, right) {
    while (left < right) {
        right &= right - 1;
    }
    return right;
};

console.log(rangeBitwiseAnd(1, 2147483647));
