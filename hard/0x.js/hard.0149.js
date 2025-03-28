/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    let n = points.length;
    let A, B, hash;
    const directions = new Map();
    let max = 1;

    for (let i = 0; i < n - 1; i++) {
        directions.clear();
        for (let j = i + 1; j < n; j++) {
            A = points[i][0] - points[j][0];
            B = points[i][1] - points[j][1];

            hash = B === 0 ? Infinity : A / B;
            directions.has(hash) || directions.set(hash, 1);
            directions.set(hash, directions.get(hash) + 1);
        }
        max = Math.max(max, Math.max(...directions.values()));
    }
    return max;
};

console.log(
    maxPoints([
        [1, 1],
        [2, 2],
        [3, 3]
    ])
);

console.log(
    maxPoints([
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4]
    ])
);
