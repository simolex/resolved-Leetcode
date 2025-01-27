/**
 * 3223. Minimum Length of String After Operations
 *
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    const freqLetters = s.split("").reduce((hashSet, l) => {
        hashSet[l.charCodeAt(0) - "a".charCodeAt(0)]++;
        return hashSet;
    }, Array(26).fill(0));

    return freqLetters.reduce((restLength, c) => restLength + ((c - 1) % 2) + 1, 0);
};

console.log(minimumLength("abaacbcbb"));
console.log(minimumLength("aa"));
