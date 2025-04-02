/**
 * 290. Word Pattern
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const map = new Map();
    const mapParts = new Set();
    const parts = s.split(" ");

    if (pattern.length !== parts.length) {
        return false;
    }

    let chr;
    for (let i = 0; i < pattern.length; i++) {
        chr = pattern[i];
        if (!map.has(chr)) {
            map.set(chr, parts[i]);
            if (mapParts.has(parts[i])) {
                return false;
            }
            mapParts.add(parts[i]);
        } else if (map.get(chr) !== parts[i]) {
            return false;
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
