/**
 * 198. House Robber
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    const dp = Array(n);
    let max = 0;

    for (let i = 0; i < n; i++) {
        dp[i] = nums[i] + Math.max(i - 2 >= 0 ? dp[i - 2] : 0, i - 3 >= 0 ? dp[i - 3] : 0);
        max = Math.max(max, dp[i]);
    }
    return max;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
