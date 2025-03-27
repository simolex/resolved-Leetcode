/**
 * 915. Partition Array into Disjoint Intervals
 *
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
    let n = nums.length;

    const suffix = Array(n);
    suffix[n - 1] = nums[n - 1];
    for (let i = n - 2; i !== -1; i--) {
        suffix[i] = Math.min(suffix[i + 1], nums[i]);
    }

    let prefix = -Infinity;
    for (let i = 0; i < n - 1; i++) {
        prefix = Math.max(prefix, nums[i]);
        if (prefix <= suffix[i + 1]) {
            return i + 1;
        }
    }
};

var partitionDisjoint = function (nums) {
    let n = nums.length;

    let prefix = nums[0];
    let max = nums[0];
    let left = 1;
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] < prefix) {
            left = i + 1;
            prefix = max;
        } else {
            max = Math.max(max, nums[i]);
        }
    }
    return left;
};

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12]));
