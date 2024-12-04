/**
 * 2825. Make String a Subsequence Using Cyclic Increments
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    const dict = "abcdefghijklmnopqrstuvwxyz";
    const cyclic = new Map();
    for (let i = 0; i < dict.length; i++) {
        cyclic.set(dict[i], dict[(i + 1) % dict.length]);
    }
    // console.log(cyclic);
    let j = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[j] || cyclic.get(str1[i]) === str2[j]) {
            if (++j >= str2.length) {
                return true;
            }
        }
    }
    return false;
};

console.log(canMakeSubsequence("abc", "ad"));
console.log(canMakeSubsequence("zc", "ad"));
console.log(canMakeSubsequence("ab", "d"));
