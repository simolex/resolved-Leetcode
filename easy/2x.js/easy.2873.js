/**
 * 2873. Maximum Value of an Ordered Triplet I
 *
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let n = nums.length;
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                max = Math.max(max, (nums[i] - nums[j]) * nums[k]);
            }
        }
    }
    return max < 0 ? 0 : max;
};

var maximumTripletValue = function (nums) {
    let n = nums.length;
    let maxT = 0;

    let maxI;
    for (let k = 2; k < n; k++) {
        maxI = nums[0];
        for (let j = 1; j < k; j++) {
            maxT = Math.max(maxT, (maxI - nums[j]) * nums[k]);
            maxI = Math.max(maxI, nums[j]);
        }
    }
    return maxT;
};

console.log(maximumTripletValue([12, 6, 1, 2, 7]));
console.log(maximumTripletValue([1, 10, 3, 4, 19]));
console.log(maximumTripletValue([1, 2, 3]));
