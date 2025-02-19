/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    word2.length > word1.length || ([word1, word2] = [word2, word1]);
    let m = word1.length;
    let n = word2.length;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else {
                dp[i][j] =
                    word1[i - 1] === word2[j - 1]
                        ? dp[i - 1][j - 1]
                        : Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    return dp[m][n];
};

console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
