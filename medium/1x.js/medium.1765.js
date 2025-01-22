/**
 * 1765. Map of Highest Peak
 *
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
    let m = isWater.length;
    let n = isWater[0].length;
    const result = Array.from({ length: m }, () => Array(n).fill(-2));

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
            if (isWater[i][j] === 1) {
                queue.push(0, i, j);
            }
        }
    }

    let height, i, j;
    while (pntQueue < queue.length) {
        height = queue[pntQueue++];
        i = queue[pntQueue++];
        j = queue[pntQueue++];

        if (result[i][j] < 0) {
            result[i][j] = height;
            for (let [dI, dJ] of directions) {
                dI += i;
                dJ += j;

                if (dI >= 0 && dI < m && dJ >= 0 && dJ < n && result[dI][dJ] < -1) {
                    queue.push(height + 1, dI, dJ);
                    result[dI][dJ] = -1;
                }
            }
        }
    }

    return result;
};

console.log(
    highestPeak([
        [0, 1],
        [0, 0]
    ])
);

console.log(
    highestPeak([
        [0, 0, 1],
        [1, 0, 0],
        [0, 0, 0]
    ])
);
