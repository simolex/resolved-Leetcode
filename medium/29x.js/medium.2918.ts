/**
 * 2918. Minimum Equal Sum of Two Arrays After Replacing Zeros
 */
function minSum(nums1: number[], nums2: number[]): number {

    let zeroCount1 = 0;
    let zeroCount2 = 0;
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < nums1.length; i++) {
        zeroCount1 += (nums1[i] === 0) ? 1 : 0;
        sum1 += nums1[i];
    }

    for (let i = 0; i < nums2.length; i++) {
        zeroCount2 += (nums2[i] === 0) ? 1 : 0;
        sum2 += nums2[i];
    }

    if (zeroCount1 === zeroCount2 && !zeroCount1 && sum1 !== sum2) return -1;
    if (zeroCount1 === 0 && zeroCount2 > 0 && sum1 < sum2 + zeroCount2) return -1;
    if (zeroCount2 === 0 && zeroCount1 > 0 && sum2 < sum1 + zeroCount1) return -1;

    return Math.max(sum1 + zeroCount1, sum2 + zeroCount2)
};

console.log(minSum([3, 2, 0, 1, 0], [6, 5, 0]));
console.log(minSum([2, 0, 2, 0], [1, 4]));
console.log(minSum([0, 17, 20, 17, 5, 0, 14, 19, 7, 8, 16, 18, 6], [21, 1, 27, 19, 2, 2, 24, 21, 16, 1, 13, 27, 8, 5, 3, 11, 13, 7, 29, 7]));
