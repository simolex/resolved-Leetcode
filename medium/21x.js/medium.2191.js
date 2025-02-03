/**
 * 2191. Sort the Jumbled Numbers
 *
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    const mappedNums = nums.map((num) =>
        Number(
            num
                .toString()
                .split("")
                .map((n) => mapping[n])
                .join("")
        )
    );

    const indexedRow = Array.from({ length: nums.length }, (_, i) => i);
    indexedRow.sort((a, b) => mappedNums[a] - mappedNums[b]);

    return indexedRow.map((i) => nums[i]);
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]));
