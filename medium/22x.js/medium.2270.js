/**
 * 2270. Number of Ways to Split Array
 *
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    const n = nums.length;
    const fullSum = nums.reduce((sum, v) => sum + v);

    let count = 0;
    let vizitedSum = 0;
    let restSum = fullSum;

    for (let i = 0; i < n - 1; i++) {
        restSum -= nums[i];
        vizitedSum += nums[i];

        if (vizitedSum >= restSum) {
            count++;
        }
    }
    return count;
};

console.log(waysToSplitArray([10, 4, -8, 7]));
console.log(waysToSplitArray([2, 3, 1, 0]));
console.log(waysToSplitArray([6, -1, 9]));
