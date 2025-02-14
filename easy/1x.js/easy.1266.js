/**
 * 1266. Minimum Time Visiting All Points
 *
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let times = 0;
    let n = points.length;

    let [prevX, prevY] = points[0];
    for (let i = 1; i < n; i++) {
        [x, y] = points[i];
        times += Math.max(Math.abs(x - prevX), Math.abs(y - prevY));
        prevX = x;
        prevY = y;
    }
    return times;
};

console.log(
    minTimeToVisitAllPoints([
        [1, 1],
        [3, 4],
        [-1, 0],
    ])
);
console.log(
    minTimeToVisitAllPoints([
        [3, 2],
        [-2, 2],
    ])
);
