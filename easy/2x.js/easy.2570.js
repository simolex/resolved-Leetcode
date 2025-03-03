/**
 * 2570. Merge Two 2D Arrays by Summing Values
 *
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    const merged = [];
    let pnt1 = 0;
    let pnt2 = 0;
    let len1 = nums1.length;
    let len2 = nums2.length;

    while (pnt1 < len1 || pnt2 < len2) {
        if (pnt1 !== len1 && (pnt2 === len2 || nums1[pnt1][0] <= nums2[pnt2][0])) {
            if (pnt2 !== len2 && nums1[pnt1][0] === nums2[pnt2][0]) {
                nums1[pnt1][1] += nums2[pnt2][1];
                pnt2++;
            }
            merged.push(nums1[pnt1]);
            pnt1++;
        } else {
            merged.push(nums2[pnt2]);
            pnt2++;
        }
    }
    return merged;
};

console.log(
    mergeArrays(
        [
            [1, 2],
            [2, 3],
            [4, 5],
        ],
        [
            [1, 4],
            [3, 2],
            [4, 1],
        ]
    )
);

console.log(
    mergeArrays(
        [
            [2, 4],
            [3, 6],
            [5, 5],
        ],
        [
            [1, 3],
            [4, 3],
        ]
    )
);
