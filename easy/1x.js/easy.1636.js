/**
 * 1636. Sort Array by Increasing Frequency
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const freq = new Map();

    for (let num of nums) {
        freq.set(num, -~freq.get(num));
    }

    return [...freq]
        .sort((a, b) => a[1] - b[1] || b[0] - a[0])
        .reduce((res, [n, c]) => {
            res.push(...Array(c).fill(n));
            return res;
        }, []);
};

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
