/**
 * 122. Best Time to Buy and Sell Stock II
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    const dp = Array(n).fill(0);

    let currentProfit;
    for (let i = 1; i < n; i++) {
        currentProfit = prices[i] - prices[i - 1];
        dp[i] = dp[i - 1] + (currentProfit > 0 ? currentProfit : 0);
    }

    return dp[n - 1];
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
