/**
 * 213. House Robber II
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) {
        return nums[0];
    }

    const dp = Array(n);
    let max = 0,
        maxResult = 0;

    for (let i = 0; i < n - 1; i++) {
        dp[i] = nums[i] + Math.max(i - 2 >= 0 ? dp[i - 2] : 0, i - 3 >= 0 ? dp[i - 3] : 0);
        max = Math.max(max, dp[i]);
    }
    maxResult = Math.max(max, maxResult);

    for (let i = 1; i < n; i++) {
        dp[i] = nums[i] + Math.max(i - 2 > 0 ? dp[i - 2] : 0, i - 3 > 0 ? dp[i - 3] : 0);
        max = Math.max(max, dp[i]);
    }

    return Math.max(max, maxResult);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));
