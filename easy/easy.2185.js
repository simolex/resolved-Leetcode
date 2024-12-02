/**
 * 2185. Counting Words With a Given Prefix
 *
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0;

    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }
    return count;
};
