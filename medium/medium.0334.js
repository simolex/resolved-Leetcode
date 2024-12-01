/**
 * @param {number[]} nums
 * @return {boolean}
 */

function increasingTriplet(nums) {
    const tupleNums = [Infinity, Infinity, Infinity];

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (tupleNums[0] >= v) {
            tupleNums[0] = v;
        } else if (tupleNums[1] >= v) {
            tupleNums[1] = v;
        } else {
            return true;
        }
    }

    return false;
}

console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([1, 2, 3, 4, 5]));
