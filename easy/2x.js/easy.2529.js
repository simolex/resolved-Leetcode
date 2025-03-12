/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let n = nums.length;
    let pos, neg;
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left < right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < 0) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (left === n - 1 && nums[left] !== 0) {
        return n;
    }

    neg = left;
    right = n - 1;

    while (left < right) {
        mid = left + Math.ceil((right - left) / 2);
        if (nums[mid] <= 0) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    pos = n - right;
    if (nums[right] === 0) {
        pos--;
    }
    return Math.max(pos, neg);
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([5, 20, 66, 1314]));
console.log(maximumCount([0]));
