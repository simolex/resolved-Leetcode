/**
 * 1423. Maximum Points You Can Obtain from Cards
 *
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let n = cardPoints.length;
    let result = -Infinity;

    let score = 0;
    for (let i = n - k; i < n + k; i++) {
        score += cardPoints[i % n];

        if (i >= n) {
            score -= cardPoints[(i - k) % n];
        }

        if (i >= n - 1) {
            result = Math.max(result, score);
        }
    }

    return result;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
