/**
 * 724. Find Pivot Index
 *
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const prefix = nums.reduce(
        (p, v) => {
            p.push(p[p.length - 1] + v);
            return p;
        },
        [0]
    );

    let lens = nums.length;
    let lastSuffix = prefix[lens];

    for (let i = 0; i < lens; i++) {
        if (prefix[i] + prefix[i + 1] === lastSuffix) {
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
