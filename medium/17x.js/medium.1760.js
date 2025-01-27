/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
    let left = 1;
    let right = nums.reduce((max, v) => Math.max(max, v));
    while (left < right) {
        const m = left + Math.floor((right - left) / 2);
        let cnt = 0;
        for (let i = 0; i < nums.length && cnt <= maxOperations; i++) {
            cnt += Math.trunc((nums[i] - 1) / m);
        }

        if (cnt <= maxOperations) {
            right = m;
        } else {
            left = m + 1;
        }
    }
    return left;
};

console.log(minimumSize([9], 2));
console.log(minimumSize([2, 4, 8, 2], 4));
