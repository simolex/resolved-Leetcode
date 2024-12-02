/**
 * 2352. Equal Row and Column Pairs
 *
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const lens = grid.length;
    const rows = new Map();
    const columns = new Map();

    const addToMap = (m, word) => {
        if (!m.has(word)) {
            m.set(word, { cnt: 0 });
        }
        m.get(word).cnt++;
    };

    const saveWords = (r, c) => {
        addToMap(rows, r);
        addToMap(columns, c);
    };

    let row = Array(lens);
    let column = Array(lens);

    for (let i = 0; i < lens; i++) {
        for (let j = 0; j < lens; j++) {
            row[j] = grid[i][j];
            column[j] = grid[j][i];
        }
        saveWords(row.join("#"), column.join("#"));
    }

    let count = 0;
    for (let word of rows.keys()) {
        if (columns.has(word)) {
            count += columns.get(word).cnt * rows.get(word).cnt;
        }
    }
    return count;
};

console.log(
    equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7]
    ])
);

console.log(
    equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2]
    ])
);
