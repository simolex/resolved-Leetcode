/**
 * 2140. Solving Questions With Brainpower
 *
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    let n = questions.length;
    const dp = Array(n).fill(0);

    dp[n - 1] = questions[n - 1][0];
    let cost, power, profit;
    for (let i = n - 2; i >= 0; i--) {
        [cost, power] = questions[i];
        profit = cost + (i + power + 1 < n ? dp[i + power + 1] : 0);
        dp[i] = Math.max(dp[i + 1], profit);
    }

    return dp[0];
};

console.log(
    mostPoints([
        [3, 2],
        [4, 3],
        [4, 4],
        [2, 5]
    ])
); // 5
console.log(
    mostPoints([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5]
    ])
); // 7
