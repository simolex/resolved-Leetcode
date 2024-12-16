/**
 * 3264. Final Array State After K Multiplication Operations I
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */

var getFinalState = function (nums, k, multiplier) {
    const withIndex = nums.map((v, i) => [v, i]);

    for (let i = 0; i < k; i++) {
        withIndex.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        withIndex[0][0] *= multiplier;
    }
    withIndex.sort((a, b) => a[1] - b[1]);
    return withIndex.map((v) => v[0]);
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
