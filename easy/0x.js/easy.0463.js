/**
 * 463. Island Perimeter
 *
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let islandArea = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                islandArea += 4;
                directions.forEach(([dR, dC]) => {
                    dR += r;
                    dC += c;
                    if (dR >= 0 && dR < rows && dC >= 0 && dC < cols && grid[dR][dC] === 1) {
                        islandArea -= 1;
                    }
                });
            }
        }
    }

    return islandArea;
};

console.log(
    islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ])
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));
console.log(
    islandPerimeter([
        [1, 1],
        [1, 1],
    ])
);
