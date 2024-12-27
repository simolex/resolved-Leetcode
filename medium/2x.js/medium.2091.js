/**
 * 2091. Removing Minimum and Maximum From Array
 *
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
    const n = nums.length;
    if (n === 1) return 1;

    const minMax = nums.reduce(
        (mm, v, i, arr) => {
            if (arr[mm.minIdx] > v) {
                mm.minIdx = i;
            }
            if (arr[mm.maxIdx] < v) {
                mm.maxIdx = i;
            }
            return mm;
        },
        { minIdx: 0, maxIdx: 0 }
    );

    const indexes = Object.values(minMax).map((v) => v + 1);
    indexes.sort((a, b) => a - b);

    const [a, b] = indexes;
    return Math.min(b, n - a + 1, a + n - b + 1);
};

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6]));
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]));
console.log(minimumDeletions([101]));
