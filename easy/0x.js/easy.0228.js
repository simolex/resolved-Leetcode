/**
 * 228. Summary Ranges
 *
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let start = 0;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                result.push(`${nums[i]}`);
            } else {
                result.push(`${nums[start]}->${nums[i]}`);
            }
            start = i + 1;
        }
    }

    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
