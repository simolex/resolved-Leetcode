/**
 * 2401. Longest Nice Subarray
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    const n = nums.length;
    let bitSum = 0;

    const add = (value) => {
        bitSum = bitSum | value;
    };

    const del = (value) => {
        bitSum = bitSum & ~value;
    };

    let right = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        while (right < n && 0 == (bitSum & nums[right])) {
            add(nums[right]);
            right++;
        }
        count = Math.max(count, right - i);
        del(nums[i]);
    }
    return count;
};

console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
console.log(longestNiceSubarray([3, 1, 5, 11, 13]));
