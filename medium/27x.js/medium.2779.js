/**
 * 2779. Maximum Beauty of an Array After Applying Operation
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    if (nums.length == 1) return 1;

    const maxNum = nums.reduce((max, v) => Math.max(max, v), -Infinity);

    const range = Array(maxNum + 1).fill(0);
    nums.forEach((v) => {
        range[Math.max(0, v - k)]++;
        range[Math.min(maxNum, v + k + 1)]--;
    });

    let result = 0;

    range.reduce((sum, v) => {
        result = Math.max(result, sum + v);
        return sum + v;
    }, 0);

    return result;
};

console.log(maximumBeauty([4, 6, 1, 2], 2));
console.log(maximumBeauty([1, 1, 1, 1], 10));
