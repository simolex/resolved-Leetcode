/**
 * 1004. Max Consecutive Ones III
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    const lens = nums.length;
    let max = 0;
    let right = 0;
    let usedK = 0;
    for (let i = 0; i < lens; i++) {
        while (right < lens && usedK < k) {
            if (nums[right] === 0) {
                usedK++;
            }
            right++;
        }

        while (right < lens && nums[right] === 1) {
            right++;
        }

        max = Math.max(max, right - i);

        if (nums[i] === 0 && usedK > 0) {
            usedK--;
        }

        if (k === 0) {
            while (i < lens - 1 && nums[i + 1] == 0) {
                i++;
            }
            right = i + 1;
        }
    }
    return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0], 2));
console.log(longestOnes([1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0], 0));
console.log(longestOnes([0, 1, 1], 0));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
