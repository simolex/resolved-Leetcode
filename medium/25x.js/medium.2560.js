/**
 * 2560. House Robber IV
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let n = nums.length;
    let l = 1;
    let r = Math.max(...nums);
    let m;

    const countThefts = (maxScore) => {
        let i = 0;
        let count = 0;
        while (i < n) {
            if (nums[i] <= maxScore) {
                count++;
                i++;
            }
            i++;
        }
        return count;
    };

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (countThefts(m) >= k) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};

console.log(minCapability([2, 3, 5, 9], 2));
console.log(minCapability([2, 7, 9, 3, 1], 2));
