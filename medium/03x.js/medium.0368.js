/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    let n = nums.length;
    let maxIndex = 0;
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);
    nums.sort((a, b) => a - b);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[maxIndex] < dp[i]) {
            maxIndex = i;
        }
    }

    const result = [];
    while (maxIndex >= 0) {
        result.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }
    return result.reverse();
};

console.log(largestDivisibleSubset([1, 2, 3]));
console.log(largestDivisibleSubset([1, 2, 4, 8]));
