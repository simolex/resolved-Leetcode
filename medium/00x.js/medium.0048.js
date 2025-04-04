/**
 * 48. Rotate Image
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;

    let swap;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        swap = matrix[n - i - 1];
        matrix[n - i - 1] = matrix[i];
        matrix[i] = swap;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swap = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = swap;
        }
    }
};
