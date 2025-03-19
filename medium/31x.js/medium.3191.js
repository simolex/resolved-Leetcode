/**
 * 3191. Minimum Operations to Make Binary Array Elements Equal to One I
 *
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] === 0) {
            nums[i] = 1 - nums[i];
            nums[i + 1] = 1 - nums[i + 1];
            nums[i + 2] = 1 - nums[i + 2];
            count++;
        }
    }
    return nums.slice(-2).join("") === "11" ? count : -1;
};

console.log(minOperations([0, 1, 1, 1, 0, 0]));
console.log(minOperations([0, 1, 1, 1]));
