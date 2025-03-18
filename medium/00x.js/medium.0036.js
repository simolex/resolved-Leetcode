/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let maxSize = 9;

    const rows = Array.from({ length: maxSize }, () => new Set());
    const cols = Array.from({ length: maxSize }, () => new Set());
    const subBoxs = Array.from({ length: Math.ceil(maxSize / 3) }, () =>
        Array.from({ length: Math.ceil(maxSize / 3) }, () => new Set())
    );
    const mapCoords = Array.from({ length: maxSize }, (_, i) => Math.floor(i / 3));
    let val;
    for (let i = 0; i < maxSize; i++) {
        for (let j = 0; j < maxSize; j++) {
            val = board[i][j];
            if (
                val !== "." &&
                (subBoxs[mapCoords[i]][mapCoords[j]].has(val) ||
                    rows[i].has(val) ||
                    cols[j].has(val))
            ) {
                return false;
            }

            rows[i].add(val);
            cols[j].add(val);
            subBoxs[mapCoords[i]][mapCoords[j]].add(val);
        }
    }
    return true;
};

var isValidSudoku = function (board) {
    let maxSize = 9;
    const set = new Set();
    let val;
    for (let i = 0; i < maxSize; i += 3) {
        for (let j = 0; j < maxSize; j += 3) {
            set.clear();
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    val = board[x][y];
                    if (val !== "." && set.has(val)) {
                        return false;
                    }
                    set.add(val);
                }
            }
        }
    }

    for (let i = 0; i < maxSize; i++) {
        set.clear();
        for (let j = 0; j < maxSize; j++) {
            val = board[i][j];
            if (val !== "." && set.has(val)) {
                return false;
            }
            set.add(val);
        }
    }

    for (let i = 0; i < maxSize; i++) {
        set.clear();
        for (let j = 0; j < maxSize; j++) {
            val = board[j][i];
            if (val !== "." && set.has(val)) {
                return false;
            }
            val = board[j][i];
            set.add(val);
        }
    }
    return true;
};

console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
console.log(
    isValidSudoku([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
);
