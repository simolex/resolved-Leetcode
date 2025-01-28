/**
 * 2658. Maximum Number of Fish in a Grid
 *
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let pntQueue = 0;
    const queue = [];
    let fishMax = 0;
    let fishCount, curR, curC;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] > 0) {
                fishCount = grid[r][c];
                grid[r][c] = 0;

                queue.push(r, c);
                while (pntQueue < queue.length) {
                    curR = queue[pntQueue++];
                    curC = queue[pntQueue++];

                    directions.forEach(([dR, dC]) => {
                        dR += curR;
                        dC += curC;
                        if (dR >= 0 && dR < rows && dC >= 0 && dC < cols && grid[dR][dC] > 0) {
                            queue.push(dR, dC);
                            fishCount += grid[dR][dC];
                            grid[dR][dC] = 0;
                        }
                    });
                }
                fishMax = Math.max(fishMax, fishCount);
            }
        }
    }

    return fishMax;
};

console.log(
    findMaxFish([
        [0, 2, 1, 0],
        [4, 0, 0, 3],
        [1, 0, 0, 4],
        [0, 3, 2, 0],
    ])
);
console.log(
    findMaxFish([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
    ])
);
