/**
 * 2425. Bitwise XOR of All Pairings
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;

    let result = 0;

    if (n % 2 == 1) {
        result = nums2.reduce((res, v) => res ^ v, result);
    }

    if (m % 2 == 1) {
        result = nums1.reduce((res, v) => res ^ v, result);
    }

    return result;
};

var xorAllNums = function (nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;

    let result = 0;

    if (n % 2 == 1) {
        for (let i = 0; i < m; i++) {
            result ^= nums2[i];
        }
    }

    if (m % 2 == 1) {
        for (let i = 0; i < n; i++) {
            result ^= nums1[i];
        }
    }

    return result;
};

console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]));
console.log(xorAllNums([1, 2], [3, 4]));
