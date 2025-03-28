/**
 * 30. Substring with Concatenation of All Words
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {
    let len = s.length;
    let wordLen = words[0].length;
    let sumSize = words.length * wordLen;
    const result = [];

    if (len < sumSize) {
        return result;
    }

    const hashWords = new Map();

    for (let word of words) {
        hashWords.set(word, -~hashWords.get(word));
    }

    const uniqueWords = [...hashWords.keys()];
    const wordToIndex = new Map(uniqueWords.map((w, i) => [w, i]));
    const avalibleWords = Array(len - wordLen + 1);

    let currentWord = "";

    for (let i = 0; i < len; i++) {
        if (i >= wordLen) {
            currentWord = currentWord.substring(1) + s[i];
        } else {
            currentWord += s[i];
        }

        if (i >= wordLen - 1 && wordToIndex.has(currentWord)) {
            avalibleWords[i - wordLen + 1] = wordToIndex.get(currentWord);
        }
    }

    for (let i = 0; i < len - sumSize + 1; i++) {
        while (i < len - sumSize + 1 && avalibleWords[i] === undefined) {
            i++;
        }

        let pattern = [...hashWords.values()];

        let j = 0;
        let lastRest = 0;
        let countZero = 0;
        while (
            i + j * wordLen < avalibleWords.length &&
            avalibleWords[i + j * wordLen] !== undefined &&
            lastRest >= 0 &&
            j < words.length &&
            countZero < hashWords.size
        ) {
            lastRest = --pattern[avalibleWords[i + j * wordLen]];
            if (lastRest === 0) {
                countZero++;
            }
            if (countZero === hashWords.size) {
                result.push(i);
            }

            j++;
        }
    }
    return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]));
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log(findSubstring("mississippi", ["is"]));
