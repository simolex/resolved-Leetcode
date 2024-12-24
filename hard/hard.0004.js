/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    if (len1 < len2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const indexMedian = Math.floor((len1 + len2 - 1) / 2);

    const calcMedian = (m1, m2) => {
        return (m1 + m2) / 2;
    };

    const search = (m1) => {
        let l = 0;
        let r = len2 - 1;
        console.log("m1", m1);
        while (l < r) {
            m = l + Math.floor((r - l) / 2);
            if (nums2[m] <= nums1[m1] && indexMedian < m1 + m + 1) {
                l = m - 1;
            } else {
                r = m;
            }
        }
        console.log("r", r);
        return indexMedian <= m1 + r + 1;
    };

    let l = 0;
    let r = len1 - 1;
    let m;

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (search(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    console.log(l);
};

console.log(findMedianSortedArrays([1, 2, 4, 6, 7], [3, 5, 6]));
