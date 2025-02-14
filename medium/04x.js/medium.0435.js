/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    let n = intervals.length;

    intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let needDelete = 0;
    let [_, lastEnd] = intervals[0];
    for (let i = 1; i < n; i++) {
        let [start, end] = intervals[i];

        if (lastEnd <= start) {
            lastEnd = end;
        } else {
            needDelete++;
        }
    }

    return needDelete;
};

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ])
);

console.log(
    eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
    ])
);

console.log(
    eraseOverlapIntervals([
        [0, 2],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
    ])
);
