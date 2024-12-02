/**
 * 2215. Find the Difference of Two Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const result = [];
    const hashNums1 = nums1.reduce((set, num) => set.add(num), new Set());
    const hashNums2 = nums2.reduce((set, num) => set.add(num), new Set());
    result[0] = [...hashNums1].filter((v) => !hashNums2.has(v));
    result[1] = [...hashNums2].filter((v) => !hashNums1.has(v));
    return result;
};
