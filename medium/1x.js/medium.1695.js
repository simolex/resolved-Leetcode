/**
 * 1695. Maximum Erasure Value
 *
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    const n = nums.length;
    const maxSet = new Set();

    let right = 0;
    let count = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
        while (right < n && !maxSet.has(nums[right])) {
            count += nums[right];
            maxSet.add(nums[right]);
            right++;
        }
        max = Math.max(count, max);

        maxSet.delete(nums[i]);
        count -= nums[i];
    }
    return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
