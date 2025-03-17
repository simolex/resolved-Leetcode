/**
 * 3069. Distribute Elements Into Two Arrays I
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    const left = [nums[0]];
    const right = [nums[1]];

    for (let i = 2; i < nums.length; i++) {
        if (left[left.length - 1] > right[right.length - 1]) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return left.concat(right);
};

console.log(resultArray([2, 1, 3]));
console.log(resultArray([5, 4, 3, 8]));
