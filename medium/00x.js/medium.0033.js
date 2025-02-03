/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length;
    let left = 0;
    let right = n;
    let mid;
    while (left < right) {
        mid = left + Math.ceil((right - left) / 2);
        if (nums[left] < nums[mid]) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    let offset = (left + 1) % n;

    left = 0;
    right = n;
    while (left < right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[(mid + offset) % n] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[(left + offset) % n] == target ? (left + offset) % n : -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([5, 6, 7, 0, 1, 2, 4], 2));
console.log(search([0, 1, 2, 4, 5, 6, 7], 4));

console.log(search([1, 3], 3));
