/**
 * 1749. Maximum Absolute Sum of Any Subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    let n = nums.length;
    let minSubSum = nums[0];
    let maxSubSum = nums[0];
    let result = Math.abs(minSubSum);

    for (let i = 1; i < n; i++) {
        minSubSum = Math.min(nums[i], minSubSum + nums[i]);
        maxSubSum = Math.max(nums[i], maxSubSum + nums[i]);

        result = Math.max(result, Math.abs(minSubSum), Math.abs(maxSubSum));
    }
    return result;
};

console.log(maxAbsoluteSum([1, -3, 2, 3, -4]));
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2]));
console.log(maxAbsoluteSum([-7, -1, 0, -2, 1, 3, 8, -2, -6, -1, -10, -6, -6, 8, -4, -9, -4, 1, 4, -9]));
