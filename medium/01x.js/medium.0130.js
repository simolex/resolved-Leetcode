/**
 * 130. Surrounded Regions
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let n = board.length;
    let m = board[0].length;

    // let free = Array.from({ length: n }, () => Array(m).fill(false));

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    let pntQueue = 0;
    const queue = [];

    const testFree = (i, j) => {
        if ((i === 0 || i === n - 1 || j === 0 || j === m - 1) && board[i][j] == "O") {
            queue.push(i, j);
            board[i][j] = "F"; //Free territory
            while (pntQueue < queue.length) {
                curI = queue[pntQueue++];
                curJ = queue[pntQueue++];

                directions.forEach(([dI, dJ]) => {
                    dI += curI;
                    dJ += curJ;
                    if (dI >= 0 && dI < n && dJ >= 0 && dJ < m && board[dI][dJ] === "O") {
                        queue.push(dI, dJ);
                        board[dI][dJ] = "F";
                    }
                });
            }
        }
    };

    for (let i = 0; i < n; i++) {
        testFree(i, 0);
        testFree(i, m - 1);
    }
    for (let j = 1; j < m - 1; j++) {
        testFree(0, j);
        testFree(n - 1, j);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            } else if (board[i][j] === "F") {
                board[i][j] = "O";
            }
        }
    }
};
let input;
input = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];
console.log(solve(input));
console.table(input);

input = [["X"]];
console.log(solve(input));
console.table(input);
