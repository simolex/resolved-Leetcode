/**
 * 200. Number of Islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
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
    let countIsland = 0;
    let curR, curC;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] > 0) {
                countIsland++;
                grid[r][c] = 0;

                queue.push(r, c);
                while (pntQueue < queue.length) {
                    curR = queue[pntQueue++];
                    curC = queue[pntQueue++];

                    directions.forEach(([dR, dC]) => {
                        dR += curR;
                        dC += curC;
                        if (dR >= 0 && dR < rows && dC >= 0 && dC < cols && grid[dR][dC] === "1") {
                            queue.push(dR, dC);
                            grid[dR][dC] = 0;
                        }
                    });
                }
            }
        }
    }

    return countIsland;
};

console.log(
    numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ])
);
console.log(
    numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ])
);
