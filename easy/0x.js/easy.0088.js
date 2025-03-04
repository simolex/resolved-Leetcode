/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let pNums1 = m - 1;
    let pNums2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (pNums1 >= 0 && (pNums2 < 0 || nums1[pNums1] >= nums2[pNums2])) {
            nums1[i] = nums1[pNums1];
            pNums1--;
        } else {
            nums1[i] = nums2[pNums2];
            pNums2--;
        }
    }
};

let arr = [1, 2, 3, 0, 0, 0];
merge(arr, 3, [2, 5, 6], 3);
console.log(arr);

arr = [1];
merge(arr, 1, [], 0);
console.log(arr);

arr = [0];
merge(arr, 0, [1], 1);
console.log(arr);
