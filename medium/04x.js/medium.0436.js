/**
 * 436. Find Right Interval
 *
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    let n = intervals.length;
    const indices = Array.from({ length: n }, (_, i) => i);

    indices.sort((a, b) => intervals[a][0] - intervals[b][0]);
    return intervals.map(([_, end]) => {
        let l = 0;
        let r = n;
        let m;
        while (l < r) {
            m = l + Math.floor((r - l) / 2);
            if (intervals[indices[m]][0] < end) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l < n ? indices[l] : -1;
    });
};

console.log(findRightInterval([[1, 2]]));
console.log(
    findRightInterval([
        [3, 4],
        [2, 3],
        [1, 2]
    ])
);
console.log(
    findRightInterval([
        [1, 4],
        [2, 3],
        [3, 4]
    ])
);
