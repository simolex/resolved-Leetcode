/**
 * 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

var isPrefixOfWord = function (sentence, searchWord) {
    const allWords = sentence.split(" ").filter((str) => str.length > 0);

    for (let i = 0; i < allWords.length; i++) {
        if (allWords[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
};
