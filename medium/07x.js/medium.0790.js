/**
 * 790. Domino and Tromino Tiling
 *
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    const mod = 10 ** 9 + 7;
    const dp = Array(Math.max(3, n));
    [dp[0], dp[1], dp[2]] = [1, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
    }
    return dp[n];
};

console.log(numTilings(3));
console.log(numTilings(1));
console.log(numTilings(6));
