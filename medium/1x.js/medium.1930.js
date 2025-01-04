/**
 * 1930. Unique Length-3 Palindromic Subsequences
 *
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const n = s.length;
    const charList = s.split("");
    const allCharSet = new Set(charList);
    const mapsPrefix = new Map();
    const hashPalindromic = new Set();

    let current;
    let prefixValue;

    for (let i = 0; i < n; i++) {
        current = s[i];

        for (const char of allCharSet.keys()) {
            prefixValue = current == char ? 1 : 0;

            if (i == 0) {
                mapsPrefix.set(char, []);
            } else {
                prefixValue += mapsPrefix.get(char)[i - 1];
            }

            mapsPrefix.get(char).push(prefixValue);
        }
    }

    allCharSet.clear();

    let countCandidates;
    for (let i = 1; i < n - 1; i++) {
        for (const char of mapsPrefix.keys()) {
            if (!hashPalindromic.has(`${char}${s[i]}${char}`)) {
                countCandidates = mapsPrefix.get(char)[i - 1] * (mapsPrefix.get(char)[n - 1] - mapsPrefix.get(char)[i]);

                if (countCandidates > 0) {
                    hashPalindromic.add(`${char}${s[i]}${char}`);
                }
            }
        }
    }
    return hashPalindromic.size;
};

var countPalindromicSubsequence = function (s) {
    const n = s.length;
    const leftRightRange = new Map();
    const hashPalindromic = new Set();

    let currentChar;

    for (let i = 0; i < n; i++) {
        currentChar = s[i];

        if (leftRightRange.has(currentChar)) {
            leftRightRange.get(currentChar).right = i;
        } else {
            leftRightRange.set(currentChar, { left: i, right: i });
        }
    }

    let currentRange;
    for (const char of leftRightRange.keys()) {
        currentRange = leftRightRange.get(char);

        if (currentRange.right - currentRange.left > 1) {
            for (let i = currentRange.left + 1; i < currentRange.right; i++) {
                hashPalindromic.add(`${char}${s[i]}${char}`);
            }
        }
    }

    return hashPalindromic.size;
};

console.log(countPalindromicSubsequence("aabca"));
console.log(countPalindromicSubsequence("adc"));
console.log(countPalindromicSubsequence("bbcbaba"));
