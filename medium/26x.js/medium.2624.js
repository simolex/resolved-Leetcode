/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (this.length !== rowsCount * colsCount) {
        return [];
    }
    const result = Array.from({ length: rowsCount }, () => Array(colsCount));

    for (let i = 0; i < rowsCount; i++) {
        for (let j = 0; j < colsCount; j++) {
            result[i][j] =
                j % 2 === 0
                    ? this[j * rowsCount + i]
                    : (result[i][j] = this[(j + 1) * rowsCount - i - 1]);
        }
    }
    return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const a = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(a.snail(5, 4));
// [
//     [0, 1, 2, 3],
//     [0, 9, 10, 19],
//     [1, 8, 11, 18],
//     [2, 7, 12, 17],
//     [3, 6, 13, 16],
//     [4, 5, 14, 15],
// ];
