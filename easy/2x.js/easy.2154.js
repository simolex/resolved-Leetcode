/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

var findFinalValue = function (nums, original) {
    nums.sort((a, b) => a - b);
    let finding = original;

    for (let i = 0; i < nums.length; i++) {
        if (finding === nums[i]) {
            finding *= 2;
        }
    }

    return finding;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
