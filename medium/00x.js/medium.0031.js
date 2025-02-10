/**
 * 31. Next Permutation
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let n = nums.length;
    let left, right;

    left = n - 2;
    while (left >= 0 && nums[left] >= nums[left + 1]) {
        left--;
    }

    right = n - 1;
    while (left >= 0 && nums[left] >= nums[right]) {
        right--;
    }
    // console.log(left, right);
    if (left >= 0) [nums[left], nums[right]] = [nums[right], nums[left]];

    left++;
    right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    return nums;
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1, 5]));
