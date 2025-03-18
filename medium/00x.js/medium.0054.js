/**
 * 54. Spiral Matrix
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let rowFrom = 0;
    let rowTo = matrix.length;
    let colFrom = 0;
    let colTo = matrix[0].length;

    let result = [];

    while (1) {
        // Двигаемся по верхней стороне
        if (rowFrom < rowTo) {
            for (let i = colFrom; i < colTo; i++) {
                result.push(matrix[rowFrom][i]);
            }
        } else {
            return result;
        }
        rowFrom++;

        // Двигаемся по правой стороне
        if (colFrom < colTo) {
            for (let j = rowFrom; j < rowTo; j++) {
                result.push(matrix[j][colTo - 1]);
            }
        } else {
            return result;
        }
        colTo--;

        // Двигаемся по нижней стороне
        if (rowFrom < rowTo) {
            for (let i = colTo - 1; i >= colFrom; i--) {
                result.push(matrix[rowTo - 1][i]);
            }
        } else {
            return result;
        }
        rowTo--;

        // Двигаемся по левой стороне
        if (colFrom < colTo) {
            for (let j = rowTo - 1; j >= rowFrom; j--) {
                result.push(matrix[j][colFrom]);
            }
        } else {
            return result;
        }
        colFrom++;
    }
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ])
);
