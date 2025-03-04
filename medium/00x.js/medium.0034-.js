/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const result = [-1, -1];
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left < right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (nums[left] === target) {
        result.push(left);
    } else {
        return [-1, -1];
    }

    right = nums.length - 1;

    while (left < right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
