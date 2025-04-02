/**
 * 242. Valid Anagram
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Map();
    for (let chr of s) {
        freq.set(chr, -~freq.get(chr));
    }

    for (let chr of t) {
        freq.set(chr, freq.get(chr) - 1);
    }

    for (let val of freq.values()) {
        if (val !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
