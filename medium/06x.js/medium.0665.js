/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (++count > 1) {
                return false;
            }
            if (i > 1 && nums[i - 2] > nums[i]) {
                nums[i] = nums[i - 1];
            }
        }
    }

    return true;
};

console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility([4, 2, 1]));
console.log(checkPossibility([3, 4, 2, 3]));
console.log(checkPossibility([5, 7, 1, 8]));
