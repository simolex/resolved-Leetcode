/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    let max;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < k) {
            sum += vowels.has(s[i]) ? 1 : 0;

            if (i === k - 1) {
                max = sum;
            }
        } else {
            sum += (vowels.has(s[i]) ? 1 : 0) - (vowels.has(s[i - k]) ? 1 : 0);
            max = Math.max(max, sum);
        }
    }
    return max;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
