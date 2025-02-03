/**
 * 3151. Special Array I
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    let n = nums.length;
    for (let i = 1; i < n; i++) {
        if ((nums[i] & 1) === (nums[i - 1] & 1)) {
            return false;
        }
    }
    return true;
};

console.log(isArraySpecial([1]));
console.log(isArraySpecial([2, 1, 4]));
console.log(isArraySpecial([4, 3, 1, 6]));
