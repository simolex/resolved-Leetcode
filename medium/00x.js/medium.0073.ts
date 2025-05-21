/**
 Do not return anything, modify matrix in-place instead.
 */
/**
 * 73. Set Matrix Zeroes
 */
function setZeroes(matrix: number[][]): void {
    let firstRow = false;
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) {
                    firstRow = true;
                } else {
                    matrix[i][0] = 0;
                }
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0)
        for (let i = 0; i < n; i++)
            matrix[i][0] = 0;

    if (firstRow)
        for (let j = 0; j < m; j++)
            matrix[0][j] = 0;
};