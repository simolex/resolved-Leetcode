/**
 * 2460. Apply Operations to an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let n = nums.length;
    let zeroCount = 0;
    let result = [];
    let current;

    for (let i = 0; i !== n; i++) {
        if (i !== n - 1 && nums[i] === nums[i + 1]) {
            current = nums[i] * 2;
            nums[i + 1] = 0;
        } else {
            current = nums[i];
        }

        if (current === 0) {
            zeroCount++;
        } else {
            result.push(current);
        }
    }

    for (let k = 0; k < zeroCount; k++) {
        result.push(0);
    }

    return result;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
