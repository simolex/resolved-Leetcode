/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    const queue = [];
    let pntQueue = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push(0, i, j);
            }
            mat[i][j] = -2;
        }
    }

    let height, i, j;
    while (pntQueue < queue.length) {
        height = queue[pntQueue++];
        i = queue[pntQueue++];
        j = queue[pntQueue++];

        if (mat[i][j] < 0) {
            mat[i][j] = height;
            for (let [dI, dJ] of directions) {
                dI += i;
                dJ += j;

                if (dI >= 0 && dI < m && dJ >= 0 && dJ < n && mat[dI][dJ] < -1) {
                    queue.push(height + 1, dI, dJ);
                    mat[dI][dJ] = -1;
                }
            }
        }
    }

    return mat;
};

console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ])
);
console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ])
);
