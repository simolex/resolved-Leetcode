/**
 * 1493. Longest Subarray of 1's After Deleting One Element
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    const lens = nums.length;
    let max = 0;
    let right = 0;
    let usedK = 0;
    for (let i = 0; i < lens; i++) {
        while (right < lens && usedK < 1) {
            if (nums[right] === 0) {
                usedK++;
            }
            right++;
        }

        while (right < lens && nums[right] === 1) {
            right++;
        }

        if (max < right - i) {
            max = right - i;
        }

        if (nums[i] === 0 && usedK > 0) {
            usedK--;
        }
    }
    return max - 1;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
