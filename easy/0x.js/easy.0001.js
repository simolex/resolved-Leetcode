/**
 * 1. Two Sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = new Map();
    nums.forEach((v, i) => {
        if (!hash.has(v)) {
            hash.set(v, []);
        }
        hash.get(v).push(i);
    });

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];

        hash.get(v).shift();
        if (hash.get(v).length == 0) {
            hash.delete(v);
        }
        if (hash.has(target - v)) {
            return [i, hash.get(target - v).pop()];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
