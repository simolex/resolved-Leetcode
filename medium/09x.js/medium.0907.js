/**
 * 907. Sum of Subarray Minimums
 *
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const stack = []; // keep index for the latest smaller values
    const dp = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        const j = stack.length ? stack[stack.length - 1] : -1;
        if (j == -1) {
            dp[i] = 0;
        } else {
            dp[i] = dp[j];
        }
        dp[i] += (i - j) * arr[i];
        stack.push(i);
    }

    return dp.reduce((sum, val) => sum + val, 0) % (10 ** 9 + 7);
};

console.log(sumSubarrayMins([3, 1, 2, 4]));
