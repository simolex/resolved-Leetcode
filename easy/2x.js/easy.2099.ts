/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 */

var maxSubsequence = (nums: number[], k: number): number[] => {
    const sortedNums = nums.map((num, idx) => ({ num, idx }))
    sortedNums.sort((a, b) => b.num - a.num);
    return sortedNums.slice(0, k).sort((a, b) => a.idx - b.idx).map((a) => a.num);
};

var maxSubsequence = (nums: number[], k: number): number[] => {
    return nums
        .map((num, idx) => ({ num, idx }))
        .sort((a, b) => b.num - a.num)
        .slice(0, k)
        .sort((a, b) => a.idx - b.idx)
        .map((a) => a.num);
};

console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence([-1, -2, 3, 4], 3));
console.log(maxSubsequence([3, 4, 3, 3], 2));
