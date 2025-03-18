/**
 * 885. Spiral Matrix III
 *
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    let result = [[rStart, cStart]];
    const dirs = [
        [0, 1, 1],
        [1, 0, 1],
        [0, -1, 2],
        [-1, 0, 2]
    ];

    let count = rows * cols - 1;
    let level = 0;
    let di, dj, steps;

    while (count > 0) {
        for (let d = 0; d < 4 && count > 0; d++) {
            [di, dj, steps] = dirs[d];
            steps += level * 2;
            for (let i = 0; i < steps; i++) {
                rStart += di;
                cStart += dj;
                if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                    result.push([rStart, cStart]);
                    count--;
                }
            }
        }
        level++;
    }
    return result;
};

console.log(spiralMatrixIII(1, 4, 0, 0));
console.log(spiralMatrixIII(5, 6, 1, 4));
