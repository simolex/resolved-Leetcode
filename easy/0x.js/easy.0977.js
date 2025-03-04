/**
 * 977. Squares of a Sorted Array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let n = nums.length;
    const result = Array(n);
    let left = 0;
    let right = nums.length - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
