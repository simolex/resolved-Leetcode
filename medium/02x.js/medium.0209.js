/**
 * 209. Minimum Size Subarray Sum
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let right = 0;
    let sum = 0;
    let min = Infinity;
    for (let left = 0; left < n; left++) {
        while (right < n && sum < target) {
            sum += nums[right++];
        }
        if (sum >= target) {
            min = Math.min(min, right - left);
        }

        sum -= nums[left];
    }
    return min !== Infinity ? min : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
