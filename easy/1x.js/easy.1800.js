/**
 * 1800. Maximum Ascending Subarray Sum
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let n = nums.length;
    let sum = nums[0];
    let maxSum = sum;

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] < nums[i]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
