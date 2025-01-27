/**
 * 2661. First Completely Painted Row or Column
 *
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    let m = mat.length;
    let n = mat[0].length;
    let k = arr.length;

    const countByRows = Array(m).fill(0);
    const countByCols = Array(n).fill(0);

    const mapByI = Array(m * n + 1);
    const mapByJ = Array(m * n + 1);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            mapByI[mat[i][j]] = i;
            mapByJ[mat[i][j]] = j;
        }
    }

    let i, j;
    for (let a = 0; a < k; a++) {
        i = mapByI[arr[a]];
        j = mapByJ[arr[a]];
        countByRows[i]++;
        countByCols[j]++;
        if (countByRows[i] === n || countByCols[j] === m) {
            return a;
        }
    }
    return 0;
};

console.log(
    firstCompleteIndex(
        [1, 3, 4, 2],
        [
            [1, 4],
            [2, 3]
        ]
    )
);
console.log(
    firstCompleteIndex(
        [2, 8, 7, 4, 1, 3, 5, 6, 9],
        [
            [3, 2, 5],
            [1, 4, 6],
            [8, 7, 9]
        ]
    )
);

console.log(
    firstCompleteIndex(
        [1, 4, 5, 2, 6, 3],
        [
            [4, 3, 5],
            [1, 2, 6]
        ]
    )
);
