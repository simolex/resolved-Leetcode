/**
 * 162. Find Peak Element
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let m;

    while (l < r) {
        m = (l + r) >> 1;
        if (nums[m + 1] > nums[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};
