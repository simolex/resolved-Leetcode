/**
 * 2176. Count Equal and Divisible Pairs in an Array
 */

function countPairs(nums: number[], k: number): number {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j] && ((i * j) % k === 0)) {
                count++;
            }
        }
    }
    return count
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
console.log(countPairs([1, 2, 3, 4], 1));
