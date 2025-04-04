/**
 * 2873. Maximum Value of an Ordered Triplet I
 *
 * @param {number[]} nums
 * @return {number}
 */

var maximumTripletValue = function (nums) {
    let n = nums.length;
    const prefix = Array(n);
    const suffix = Array(n);

    prefix[0] = nums[0];
    suffix[n - 1] = nums[n - 1];

    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i - 1], nums[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i + 1], nums[i]);
    }

    let maxT = 0;

    for (let j = 1; j < n - 1; j++) {
        maxT = Math.max(maxT, (prefix[j - 1] - nums[j]) * suffix[j + 1]);
    }

    return maxT;
};

var maximumTripletValue = function (nums) {
    let n = nums.length;
    let prefix = 0;
    const suffix = Array(n);
    suffix[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i + 1], nums[i]);
    }

    let maxT = 0;

    for (let j = 1; j < n - 1; j++) {
        prefix = Math.max(prefix, nums[j - 1]);
        maxT = Math.max(maxT, (prefix - nums[j]) * suffix[j + 1]);
    }

    return maxT;
};

console.log(maximumTripletValue([12, 6, 1, 2, 7]));
console.log(maximumTripletValue([1, 10, 3, 4, 19]));
console.log(maximumTripletValue([1, 2, 3]));
