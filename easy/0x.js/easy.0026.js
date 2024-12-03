/**
 * 26. Remove Duplicates from Sorted Array
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    let count = 1;
    let current = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[left] !== nums[i]) {
            left = i;
            count++;
            nums[++current] = nums[i];
        }
    }
    return count;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k, nums);
