/**
 * 3042. Count Prefix and Suffix Pairs I
 *
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    const n = words.length;
    const isPrefixAndSuffix = (pattern, word) => {
        return word.startsWith(pattern) && word.endsWith(pattern);
    };

    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }
    return count++;
};

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]));
console.log(countPrefixSuffixPairs(["abab", "ab"]));
