/**
 * 2033. Minimum Operations to Make a Uni-Value Grid
 *
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
    let n = grid.length;
    let m = grid[0].length;
    const prefix = Array(m * n + 1);
    let pntPrefix = 0;
    prefix[pntPrefix++] = 0;

    let offset = grid[0][0] % x;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if ((prefix[pntPrefix++] = grid[i][j]) % x !== offset) {
                return -1;
            }
        }
    }

    prefix.sort((a, b) => a - b);

    for (let i = 1; i !== prefix.length; i++) {
        prefix[i] = prefix[i - 1] + (prefix[i] - offset) / x;
    }

    let k = prefix.length;
    let min = Infinity;
    const lastValue = prefix[k - 1];

    for (let i = 1; i !== k; i++) {
        min = Math.min(
            min,
            i * (prefix[i] - prefix[i - 1]) -
                prefix[i] +
                lastValue -
                prefix[i] -
                (k - i - 1) * (prefix[i] - prefix[i - 1])
        );
    }

    return min;
};

console.log(
    minOperations(
        [
            [2, 4],
            [6, 8]
        ],
        2
    )
);
console.log(
    minOperations(
        [
            [1, 5],
            [2, 3]
        ],
        1
    )
);
console.log(
    minOperations(
        [
            [1, 2],
            [3, 4]
        ],
        2
    )
);
