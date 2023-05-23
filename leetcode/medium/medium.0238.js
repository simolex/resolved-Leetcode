/**
 * 238. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;
    const resultLeft = [nums[0]];
    const resultRight = [nums[len - 1]];

    for (let i = 1; i < len - 1; i++) {
        const k = len - i - 1;
        resultLeft.push(resultLeft[i - 1] * nums[i]);
        resultRight.unshift(resultRight[0] * nums[k]);
    }
    resultLeft.unshift(1);
    resultRight.push(1);

    return resultLeft.map((r, i) => r * resultRight[i]);
};
