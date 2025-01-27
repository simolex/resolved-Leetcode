/**
 * 1400. Construct K Palindrome Strings
 *
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    const n = s.length;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const freqLetters = Array(alphabet.length).fill(0);
    const idxLetters = alphabet.split("").reduce((setOfAlphabet, l, i) => setOfAlphabet.set(l, i), new Map());

    for (let i = 0; i < n; i++) {
        freqLetters[idxLetters.get(s[i])]++;
    }

    const countOdd = freqLetters.reduce((sum, c) => sum + (c % 2), 0);

    return n >= k && countOdd <= k;
};

console.log(canConstruct("annabelle", 2));
console.log(canConstruct("leetcode", 3));
console.log(canConstruct("true", 4));
console.log(
    canConstruct(
        "gjludbpgwpoywknnvamdclxpltykdqvpcliheitnwmupuzdjztotovcebnjfbdivlcumcnnsfesthmgxezvodlmfvhqzbimiephhoqaaqohhpeimibzqhvfmldovzexgmhtsefsnncmuclvidbfjnbecvototzjdzupumwntiehilcpvqdkytlpxlcdmavnnkwyopwgpbduljg",
        172
    )
);
