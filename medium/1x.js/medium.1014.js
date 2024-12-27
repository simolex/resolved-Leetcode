/**
 * 1014. Best Sightseeing Pair
 *
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    const n = values.length;
    let dp = values[0];
    let max = -Infinity;
    for (let i = 1; i < n; i++) {
        max = Math.max(max, dp + values[i] - 1);
        dp = Math.max(dp - 1, values[i]);
    }
    return max;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
