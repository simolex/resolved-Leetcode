/**
 * 3223. Minimum Length of String After Operations
 *
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    const freqLetters = s.split("").reduce((hashSet, l) => {
        if (!hashSet.has(l)) {
            hashSet.set(l, { cnt: 0 });
        }

        if (hashSet.get(l).cnt === 2) {
            hashSet.get(l).cnt = 0;
        }

        hashSet.get(l).cnt++;

        return hashSet;
    }, new Map());

    return [...freqLetters.values()].map(({ cnt }) => cnt).reduce((restLength, c) => restLength + c, 0);
};

console.log(minimumLength("abaacbcbb"));
console.log(minimumLength("aa"));
