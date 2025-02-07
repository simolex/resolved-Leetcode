/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
    let n = tasks.length;
    tasks.sort((a, b) => a[0] - a[1] + b[1] - b[0]);

    let needEnergy = -Infinity;
    let used = 0;

    let cost, need;
    for (let i = 0; i < n; i++) {
        [cost, need] = tasks[i];
        needEnergy = Math.max(needEnergy, used + need);
        used += cost;
    }

    return needEnergy;
};

console.log(
    minimumEffort([
        [1, 2],
        [2, 4],
        [4, 8],
    ])
);
console.log(
    minimumEffort([
        [1, 3],
        [2, 4],
        [10, 11],
        [10, 12],
        [8, 9],
    ])
);
console.log(
    minimumEffort([
        [1, 7],
        [2, 8],
        [3, 9],
        [4, 10],
        [5, 11],
        [6, 12],
    ])
);
