/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let right = 0;
    for (let i = 0; i < nums.length && right < nums.length - 1; i++) {
        if (nums[i] == 0) {
            if (right < i) {
                right = i;
            }

            while (right < nums.length && nums[right] === 0) {
                right++;
            }

            if (right < nums.length) {
                nums[i] = nums[right];
                nums[right] = 0;
            }
        }
    }
};

let input;

input = [0, 1, 0, 3, 12];
moveZeroes(input);
console.log(input);

input = [0];
moveZeroes(input);
console.log(input);

input = [1, 2, 0, 1, 0, 3, 12];
moveZeroes(input);
console.log(input);
