/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    const dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = cost[0];
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i - 1];
    }
    return Math.min(dp[n - 1], dp[n]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
