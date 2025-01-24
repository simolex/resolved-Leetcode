/**
 * 3. Longest Substring Without Repeating Characters
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const len = s.length;
    const maxSet = new Set();

    let right = 0;
    let count = 0;
    for (let i = 0; i < len; i++) {
        while (right < len && !maxSet.has(s[right])) {
            maxSet.add(s[right]);
            right++;
        }
        count = Math.max(count, right - i);
        maxSet.delete(s[i]);
    }
    return count;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
