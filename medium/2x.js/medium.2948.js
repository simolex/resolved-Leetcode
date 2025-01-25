/**
 * 2948. Make Lexicographically Smallest Array by Swapping Elements
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    let n = nums.length;
    const result = [...nums];
    const indexes = Array.from({ length: n }, (_, i) => i);

    indexes.sort((a, b) => nums[a] - nums[b]);

    let i = 0;
    let currentGroup;
    while (i < n) {
        let j = i + 1;

        while (j < n && nums[indexes[j]] - nums[indexes[j - 1]] <= limit) {
            j++;
        }

        if (j > i + 1) {
            currentGroup = indexes.slice(i, j);
            currentGroup.sort((a, b) => a - b);
            for (let k = 0; k < currentGroup.length; k++) {
                result[currentGroup[k]] = nums[indexes[i + k]];
            }
        }

        i = j;
    }

    return result;
};

console.log(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2));
console.log(lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3));
console.log(lexicographicallySmallestArray([1, 7, 28, 19, 10], 3));
