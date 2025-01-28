/**
 * 695. Max Area of Island
 *
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
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
    let maxArea = 0;
    let islandArea, curR, curC;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] > 0) {
                islandArea = grid[r][c];
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
                            islandArea += grid[dR][dC];
                            grid[dR][dC] = 0;
                        }
                    });
                }
                maxArea = Math.max(maxArea, islandArea);
            }
        }
    }

    return maxArea;
};

console.log(
    maxAreaOfIsland([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
