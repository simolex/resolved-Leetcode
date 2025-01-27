/**
 * 1926. Nearest Exit from Entrance in Maze
 *
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const deltaI = [-1, 0, 1, 0];
    const deltaJ = [0, 1, 0, -1];
    const countDelta = deltaI.length;

    const n = maze.length;
    const m = maze[0].length;
    const queue = [];
    let pntQueue = 0;
    const visited = Array(n + 2)
        .fill()
        .map(() => Array(m + 2).fill(false));
    visited[entrance[0] + 1][entrance[1] + 1] = true;

    const getCell = (i, j) => {
        if (i < 0 || i >= n) return "+";
        if (j < 0 || j >= m) return "+";
        return maze[i][j];
    };

    const nearExit = (i, j) => {
        if (i < 0 || i >= n) return true;
        if (j < 0 || j >= m) return true;
        return false;
    };

    let canExit;

    queue.push(0, entrance);
    while (pntQueue < queue.length) {
        const step = queue[pntQueue++];
        const [curI, curJ] = queue[pntQueue++];
        visited[curI + 1][curJ + 1] = true;

        canExit = false;

        for (let i = 0; i < countDelta; i++) {
            const newI = curI + deltaI[i];
            const newJ = curJ + deltaJ[i];

            if (nearExit(newI, newJ)) {
                canExit = true;
            }

            if (getCell(newI, newJ) == "." && !visited[newI + 1][newJ + 1]) {
                queue.push(step + 1, [newI, newJ]);
                visited[newI + 1][newJ + 1] = true;
            }
        }

        if (canExit && (entrance[0] != curI || entrance[1] != curJ)) {
            return step === 0 ? -1 : step;
        }
    }
    return -1;
};

console.log(
    nearestExit(
        [
            ["+", "+", ".", "+"],
            [".", ".", ".", "+"],
            ["+", "+", "+", "."]
        ],
        [1, 2]
    )
);

console.log(
    nearestExit(
        [
            ["+", "+", "+"],
            [".", ".", "."],
            ["+", "+", "+"]
        ],
        [1, 0]
    )
);

console.log(nearestExit([[".", "+"]], [0, 0]));

console.log(
    nearestExit(
        [
            [".", "+", "+", "+", "+"],
            [".", "+", ".", ".", "."],
            [".", "+", ".", "+", "."],
            [".", ".", ".", "+", "."],
            ["+", "+", "+", "+", "."]
        ],
        [0, 0]
    )
);
