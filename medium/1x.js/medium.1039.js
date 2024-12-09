/**
 * 1039. Minimum Score Triangulation of Polygon
 *
 * @param {number[]} values
 * @return {number}
 */

var minScoreTriangulation = function (values) {
    const size = values.length;
    const dp = Array(size)
        .fill()
        .map(() => Array(size).fill(0));

    let result = Infinity;

    const minTriangulation = (weights, i = 0, j = size - 1) => {
        if (dp[i][j] !== 0) {
            return dp[i][j];
        }

        if (j - i < 2) {
            return 0;
        }

        for (let k = i + 1; k < j; k++) {
            result = Math.min(
                result,
                minTriangulation(weights, i, k) +
                    minTriangulation(weights, k, j) +
                    weights[i] * weights[j] * weights[k]
            );
        }
        dp[i][j] = result;
        return result;
    };

    return minTriangulation(values);
};

console.log(minScoreTriangulation([1, 2, 3]));
console.log(minScoreTriangulation([3, 7, 4, 5]));
console.log(minScoreTriangulation([1, 3, 1, 4, 1, 5]));
