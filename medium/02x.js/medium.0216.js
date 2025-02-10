/**
 * 216. Combination Sum III
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const result = [];
    const current = [];
    const nextDigit = (sum, from, digitLevel) => {
        if (digitLevel > k) return;

        for (let i = from; i < 10 && sum + i <= n; i++) {
            current[digitLevel - 1] = i;

            if (digitLevel === k && sum + i === n) {
                result.push([...current]);
            } else {
                nextDigit(sum + i, i + 1, digitLevel + 1);
            }
        }
    };
    nextDigit(0, 1, 1);
    return result;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));
