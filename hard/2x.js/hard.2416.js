/**
 * 2416. Sum of Prefix Scores of Strings
 *
 * @param {string[]} words
 * @return {number[]}
 */
var Trie = function () {
    this.children = {};
    this.counts = 0;
};

/**
 * @param {string} prefix
 * @return {Trie}
 */
Trie.prototype.getCount = function (prefix) {
    let node = this;
    let score = 0;
    for (let char of prefix) {
        if (!node.children[char]) return score;
        node = node.children[char];
        score += node.counts;
    }
    return score;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this;
    for (let char of word) {
        node.children[char] || (node.children[char] = new Trie());
        node = node.children[char];
        node.counts++;
    }
};

var sumPrefixScores = function (words) {
    const prefix = new Trie();

    for (let word of words) {
        prefix.insert(word);
    }
    return words.map((w) => prefix.getCount(w));
};

console.log(sumPrefixScores(["abc", "ab", "bc", "b"]));
