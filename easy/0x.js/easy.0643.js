/**
 * 643. Maximum Average Subarray I
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
    let sum = 0;
    let max;
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            sum += nums[i];

            if (i === k - 1) {
                max = sum / k;
            }
        } else {
            sum += nums[i] - nums[i - k];
            max = Math.max(max, sum / k);
        }
    }
    return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
