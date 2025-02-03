/**
 * 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let n = nums.length;
    let maxTotal = 0;
    let countIncreasing = 1;
    let countDecreasing = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            countIncreasing++;
            countDecreasing = 1;
        } else if (nums[i] < nums[i - 1]) {
            countDecreasing++;
            countIncreasing = 1;
        } else {
            countIncreasing = 1;
            countDecreasing = 1;
        }
        maxTotal = Math.max(maxTotal, countIncreasing, countDecreasing);
    }
    return maxTotal;
};

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
console.log(longestMonotonicSubarray([3, 3, 3, 3]));
console.log(longestMonotonicSubarray([3, 2, 1]));
