/**
 * 994. Rotting Oranges
 *
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const state = {
        empty: 0,
        fresh: 1,
        rotten: 2
    };

    const direction = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    const m = grid.length;
    const n = grid[0].length;

    const isGrid = (i, j) => {
        if (i < 0 || i >= m) return false;
        if (j < 0 || j >= n) return false;
        return true;
    };

    const queue = [];
    let pntQueue = 0;
    let countFresh = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === state.rotten) {
                queue.push(0, [i, j]);
            } else if (grid[i][j] === state.fresh) {
                countFresh++;
            }
        }
    }

    let minutes = 0;
    while (pntQueue < queue.length) {
        const currentMinute = queue[pntQueue++];
        const [curI, curJ] = queue[pntQueue++];

        direction.forEach(([di, dj]) => {
            if (isGrid(curI + di, curJ + dj) && grid[curI + di][curJ + dj] === state.fresh) {
                queue.push(currentMinute + 1, [curI + di, curJ + dj]);
                grid[curI + di][curJ + dj] = state.rotten;
                minutes = currentMinute + 1;
                countFresh--;
            }
        });
    }

    return countFresh > 0 ? -1 : minutes;
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1]
    ])
);

console.log(
    orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1]
    ])
);

console.log(orangesRotting([[0, 2]]));
