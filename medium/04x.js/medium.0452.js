/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1]);

    let minEnd = -Infinity;
    let count = 0;
    for (let [start, end] of points) {
        if (start > minEnd) {
            count++;
            minEnd = end;
        }
    }
    return count;
};

// Fasten version
var findMinArrowShots = function (points) {
    let n = points.length;
    points.sort((a, b) => a[1] - b[1]);

    let minEnd = -Infinity;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (points[i][0] > minEnd) {
            count++;
            minEnd = points[i][1];
        }
    }
    return count;
};

console.log(
    findMinArrowShots([
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
    ])
);
console.log(
    findMinArrowShots([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
    ])
);
console.log(
    findMinArrowShots([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
    ])
);
