/**
 * 995. Minimum Number of K Consecutive Bit Flips
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
    let n = nums.length;
    let ranges = Array(n + 1).fill(0);
    let count = 0;

    let prefix = 0;
    for (let i = 0; i < n - k + 1; i++) {
        prefix += ranges[i];
        if ((nums[i] + prefix) % 2 === 0) {
            prefix++;
            ranges[i + k]--;
            count++;
        }
    }

    for (let i = n - k + 1; i < n; i++) {
        prefix += ranges[i];
        if ((nums[i] + prefix) % 2 === 0) {
            return -1;
        }
    }
    return count;
};

console.log(minKBitFlips([0, 1, 0], 1));
console.log(minKBitFlips([1, 1, 0], 2));
console.log(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3));
console.log(minKBitFlips([0, 0, 1, 1, 0, 0], 4));
