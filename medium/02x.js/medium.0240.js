/**
 * 240. Search a 2D Matrix II
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;

    let midI = 0;
    let midJ = m - 1;
    while (midI < n && midJ >= 0) {
        if (matrix[midI][midJ] === target) return true;
        if (matrix[midI][midJ] < target) {
            midI++;
        } else {
            midJ--;
        }
    }
    return false;
};

console.log(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ],
        5
    )
);
console.log(
    searchMatrix(
        [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ],
        20
    )
);
