/**
 * 59. Spiral Matrix II
 *
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let rowFrom = 0;
    let rowTo = n;
    let colFrom = 0;
    let colTo = n;

    let val = 1;

    while (1) {
        // Двигаемся по верхней стороне
        if (rowFrom < rowTo) {
            for (let i = colFrom; i < colTo; i++) {
                result[rowFrom][i] = val++;
            }
        } else {
            return result;
        }
        rowFrom++;

        // Двигаемся по правой стороне
        if (colFrom < colTo) {
            for (let j = rowFrom; j < rowTo; j++) {
                result[j][colTo - 1] = val++;
            }
        } else {
            return result;
        }
        colTo--;

        // Двигаемся по нижней стороне
        if (rowFrom < rowTo) {
            for (let i = colTo - 1; i >= colFrom; i--) {
                result[rowTo - 1][i] = val++;
            }
        } else {
            return result;
        }
        rowTo--;

        // Двигаемся по левой стороне
        if (colFrom < colTo) {
            for (let j = rowTo - 1; j >= rowFrom; j--) {
                result[j][colFrom] = val++;
            }
        } else {
            return result;
        }
        colFrom++;
    }
};

console.log(generateMatrix(3));
console.log(generateMatrix(1));
