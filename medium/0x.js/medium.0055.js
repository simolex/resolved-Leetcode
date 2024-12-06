/**
 * 55. Jump Game
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // if (nums.length == 1) return true;
    let existSteps = 0;
    for (let i = 0; i < nums.length; i++) {
        existSteps = Math.max(existSteps - 1, nums[i]);
        if (existSteps == 0 && i < nums.length - 1) {
            return false;
        }
    }
    return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([2, 0, 0]));
