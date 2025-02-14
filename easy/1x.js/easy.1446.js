/**
 * 1446. Consecutive Characters
 *
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let len = s.length;
    let maxP = 0;

    let prev = s[0];
    let count = 1;
    for (let i = 1; i < len; i++) {
        if (s[i] === prev) {
            maxP = Math.max(maxP, ++count);
        } else {
            prev = s[i];
            count = 1;
        }
    }
    maxP = Math.max(maxP, count);

    return maxP;
};

console.log(maxPower("leetcode"));
console.log(maxPower("abbcccddddeeeeedcba"));
