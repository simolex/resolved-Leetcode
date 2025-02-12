/**
 * 2475. Number of Unequal Triplets in Array
 *
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[k] !== nums[j]) {
                    count++;
                }
            }
        }
    }
    return count;
};

// Version #2
var unequalTriplets = function (nums) {
    let n = nums.length;
    let allTriplets = (n * (n - 1) * (n - 2)) / 6;
    const freqNums = new Map();
    for (let i = 0; i < n; i++) {
        freqNums.set(nums[i], -~freqNums.get(nums[i]));
    }

    let equalTriplets = 0;
    let selectionPair;
    for (let freq of freqNums.values()) {
        selectionPair = (freq * (freq - 1)) / 2;
        equalTriplets += freq > 1 ? selectionPair * (n - freq) : 0;
        equalTriplets += freq > 2 ? (selectionPair * (freq - 2)) / 3 : 0;
    }
    return allTriplets - equalTriplets;
};

console.log(unequalTriplets([4, 4, 2, 4, 3, 3]));
console.log(unequalTriplets([1, 1, 1, 1, 1]));
