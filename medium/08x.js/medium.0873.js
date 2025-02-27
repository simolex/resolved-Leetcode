/**
 * 873. Length of Longest Fibonacci Subsequence
 *
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let n = arr.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(2));
    let maxLen = 0;

    for (let iThird = 2; iThird < n; iThird++) {
        let iFirst = 0,
            iSecond = iThird - 1;
        while (iFirst < iSecond) {
            let pairSum = arr[iFirst] + arr[iSecond];
            if (pairSum > arr[iThird]) {
                iSecond--;
            } else if (pairSum < arr[iThird]) {
                iFirst++;
            } else {
                dp[iSecond][iThird] = dp[iFirst][iSecond] + 1;
                maxLen = Math.max(dp[iSecond][iThird], maxLen);
                iSecond--;
                iFirst++;
            }
        }
    }
    return maxLen > 2 ? maxLen : 0;
};

var lenLongestFibSubseq = function (arr) {
    const dp = new Map([[0, 0]]);
    const set = new Set(arr);
    let a, b, c;
    let key1, key2;
    let max = 0;
    for (let i = 1; i < arr.length; i++) {
        b = arr[i];
        for (let j = 0; j < i; j++) {
            a = arr[j];
            c = b - a;
            if (c < a && set.has(c)) {
                key1 = JSON.stringify([a, b]);
                key2 = JSON.stringify([c, a]);
                dp.set(key1, (dp.get(key2) ?? 2) + 1);
                max = Math.max(max, (dp.get(key2) ?? 2) + 1);
            }
        }
    }
    return Math.max(...dp.values());
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]));
