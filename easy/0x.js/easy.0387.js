/**
 * 387. First Unique Character in a String
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const freqChar = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!freqChar.has(s[i])) {
            freqChar.set(s[i], i);
        } else {
            freqChar.set(s[i], -1);
        }
    }

    for (const index of freqChar.values()) {
        if (index >= 0) return index;
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
