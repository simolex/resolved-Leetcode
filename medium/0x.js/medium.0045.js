/**
 * 45. Jump Game II
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let left = 0,
        right = 0,
        result = 0;

    while (right < nums.length - 1) {
        let maxRight = 0;
        for (let i = left; i <= right; i++) {
            maxRight = Math.max(maxRight, i + nums[i]);
        }
        left = right + 1;
        right = maxRight;
        result++;
    }

    return result;
};
