/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
    let right = 0;
    const stat = new Map();

    for (let left = 0; left < s.length; left++) {
        while (right < s.length && s[right] === s[left]) {
            right++;
        }
        if (!stat.has(s[left])) {
            stat.set(s[left], []);
        }
        stat.get(s[left]).push(right - left);
    }

    let max = 0;
    for (let res of stat.values()) {
        if (res.length >= 3) {
            res.sort((a, b) => b - a);
            max = Math.max(max, res[2]);
        }
    }

    return max > 0 ? max : -1;
};

console.log(maximumLength("aaaa"));
console.log(maximumLength("abcdef"));
console.log(maximumLength("abcaba"));
console.log(maximumLength("aabcaaba"));
console.log(maximumLength("aabcaabaa"));
