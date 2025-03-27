/**
 * 14. Longest Common Prefix
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let n = strs.length;

    let prefix = strs[0];
    let sizePrefix = prefix.length;
    for (let i = 1; i < n; i++) {
        sizePrefix = Math.min(sizePrefix, strs[i].length);
        prefix = prefix.slice(0, sizePrefix);
        for (let j = 0; j < sizePrefix; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.slice(0, j);
                sizePrefix = j;
            }
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
