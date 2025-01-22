/**
 * 2017. Grid Game
 *
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
    let n = grid[0].length;
    let totalSum1 = 0,
        totalSum2 = 0;

    for (let i = 0; i < n; i++) {
        totalSum1 += grid[0][i];
    }

    let maxScore,
        minSecond = Infinity;

    for (let i = 0; i < n; i++) {
        totalSum1 -= grid[0][i];
        maxScore = Math.max(totalSum1, totalSum2);
        minSecond = Math.min(maxScore, minSecond);
        totalSum2 += grid[1][i];
    }

    return minSecond;
};

console.log(
    gridGame([
        [2, 5, 4],
        [1, 5, 1]
    ])
);

console.log(
    gridGame([
        [3, 3, 1],
        [8, 5, 2]
    ])
);

console.log(
    gridGame([
        [1, 3, 1, 15],
        [1, 3, 3, 1]
    ])
);

console.log(
    gridGame([
        [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
        [20, 10, 13, 14, 15, 5, 2, 3, 14, 3]
    ])
);
