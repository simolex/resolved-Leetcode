/**
 * 3223. Minimum Length of String After Operations
 *
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    const freqLetters = s.split("").reduce((hashSet, l) => {
        if (hashSet[l] === 2) {
            hashSet[l] = 0;
        }

        hashSet[l] = -~hashSet[l];
        return hashSet;
    }, {});

    return Object.keys(freqLetters).reduce((restLength, l) => restLength + freqLetters[l], 0);
};

console.log(minimumLength("abaacbcbb"));
console.log(minimumLength("aa"));
