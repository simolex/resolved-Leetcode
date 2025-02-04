/**
 * 2965. Find Missing and Repeated Values
 *
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let n = grid.length;

    const allNums = Array(n * n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            allNums[grid[i][j]]++;
        }
    }

    let a, b;
    for (let i = 1; i <= n * n; i++) {
        if (allNums[i] > 1) {
            a = i;
        } else if (allNums[i] === 0) {
            b = i;
        }
    }

    return [a, b];
};

console.log(
    findMissingAndRepeatedValues([
        [1, 3],
        [2, 2],
    ])
);
console.log(
    findMissingAndRepeatedValues([
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
    ])
);
