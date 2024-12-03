/**
 * 80. Remove Duplicates from Sorted Array II
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    let count = 1;
    let current = 0;
    let repeat = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[left] !== nums[i]) {
            left = i;
            count++;
            repeat = 1;
            nums[++current] = nums[i];
        } else if (repeat < 2) {
            repeat++;
            nums[++current] = nums[i];
            count++;
        }
    }
    return count;
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k = removeDuplicates(nums);
console.log(k, nums);
