/**
 * 416. Partition Equal Subset Sum
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums: number[]): boolean {
    let fullSum = 0;
    for (let num of nums) {
        fullSum += num;
    }

    if (fullSum % 2 !== 0) {
        return false;
    }
    const halfSum = fullSum / 2;

    const dp: boolean[] = Array(halfSum + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let curSum = halfSum; curSum >= num; curSum--) {
            dp[curSum] ||= dp[curSum - num];
        }
        if (dp[halfSum]) return true;
    }

    return dp[halfSum];
}

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
