/**
 * 1267. Count Servers that Communicate
 *
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let rows = Array(m).fill(0);
    let cols = Array(n).fill(0);

    let totalCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                totalCount++;
                rows[i]++;
                cols[j]++;
            }
        }
    }

    let isolated = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                isolated++;
            }
        }
    }

    return totalCount - isolated;
};

console.log(
    countServers([
        [1, 0],
        [0, 1]
    ])
);

console.log(
    countServers([
        [1, 0],
        [1, 1]
    ])
);

console.log(
    countServers([
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ])
);

console.log(
    countServers([
        [1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0]
    ])
);
