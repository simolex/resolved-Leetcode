/**
 * 419. Battleships in a Board
 *
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let rows = board.length;
    let cols = board[0].length;
    const directions = [
        [0, 1],
        [1, 0],
    ];

    let pntQueue = 0;
    const queue = [];
    let countBattleship = 0;
    let curR, curC;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "X") {
                countBattleship++;
                board[r][c] = 0;

                queue.push(r, c);
                while (pntQueue < queue.length) {
                    curR = queue[pntQueue++];
                    curC = queue[pntQueue++];

                    directions.forEach(([dR, dC]) => {
                        dR += curR;
                        dC += curC;
                        if (dR >= 0 && dR < rows && dC >= 0 && dC < cols && board[dR][dC] === "X") {
                            queue.push(dR, dC);
                            board[dR][dC] = 0;
                        }
                    });
                }
            }
        }
    }

    return countBattleship;
};

console.log(
    countBattleships([
        ["X", ".", ".", "X"],
        [".", ".", ".", "X"],
        [".", ".", ".", "X"],
    ])
);

console.log(countBattleships([["."]]));
