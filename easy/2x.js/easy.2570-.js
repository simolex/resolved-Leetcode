/**
 * 2570. Merge Two 2D Arrays by Summing Values
 *
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const start = Math.min(nums1[0][0], nums2[0][0]);
    const end = Math.max(nums1[nums1.length - 1][0], nums2[nums2.length - 1][0]);
    const result = [];

    let current;
    let p1 = 0;
    let p2 = 0;
    for (let i = start; i <= end; i++) {
        current = [i, 0];
        if (nums1[p1][0] === i) {
            current[i][1] += nums1[p1][1];
            p1++;
        }
    }
};
