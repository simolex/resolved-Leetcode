/**
 * 289. Game of Life
 *
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let n = board.length;
    let m = board[0].length;
    const directions = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1]
    ];

    const neighbors = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            neighbors[i][j] = directions.reduce((count, [dI, dJ]) => {
                dI += i;
                dJ += j;
                if (dI >= 0 && dI < n && dJ >= 0 && dJ < m && board[dI][dJ] === 1) count++;
                return count;
            }, 0);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] = neighbors[i][j] === 3 ? 1 : neighbors[i][j] === 2 ? board[i][j] : 0;
        }
    }
};

console.log(
    gameOfLife([
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ])
);
console.log(
    gameOfLife([
        [1, 1],
        [1, 0]
    ])
);

console.log(
    gameOfLife([
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ])
);
