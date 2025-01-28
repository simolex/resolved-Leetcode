/**
 * 1727. Largest Submatrix With Rearrangements
 *
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j]) matrix[i][j] += matrix[i - 1][j];
        }
    }

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        matrix[i].sort((a, b) => b - a);
        for (let j = 0; j < m; j++) {
            maxArea = Math.max(maxArea, matrix[i][j] * (j + 1));
        }
    }

    return maxArea;
};

console.log(
    largestSubmatrix([
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
    ])
);

console.log(largestSubmatrix([[1, 0, 1, 0, 1]]));
console.log(
    largestSubmatrix([
        [1, 1, 0],
        [1, 0, 1],
    ])
);
