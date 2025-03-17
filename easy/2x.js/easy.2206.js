/**
 * 2206. Divide Array Into Equal Pairs
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var divideArray = function (nums) {
    let n = nums.length;
    const freqNums = new Map();

    for (let i = 0; i < n; i++) {
        freqNums.set(nums[i], -~freqNums.get(nums[i]));
    }

    for (let count of freqNums.values()) {
        if (count % 2 === 1) {
            return false;
        }
    }
    return true;
};

var divideArray = function (nums) {
    let n = nums.length;
    const freqNums = {};

    for (let i = 0; i < n; i++) {
        freqNums[nums[i]] = (freqNums[nums[i]] || 0) + 1;
    }

    for (let num in freqNums) {
        if (freqNums[num] % 2 === 1) {
            return false;
        }
    }
    return true;
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
console.log(divideArray([1, 2, 3, 4]));
