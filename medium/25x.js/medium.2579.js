/**
 * 2579. Count Total Number of Colored Cells
 *
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let colored = 1;
    let prefix = 0;
    for (let i = 0; i < n - 1; i++) {
        prefix += i + 1;
    }
    return colored + 4 * prefix;
};

var coloredCells = function (n) {
    return 2 * (n - 1) * n + 1;
};

console.log(coloredCells(1));
console.log(coloredCells(2));
console.log(coloredCells(3));
console.log(coloredCells(4));
console.log(coloredCells(5));
