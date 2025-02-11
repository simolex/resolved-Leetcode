/**
 * 1268. Search Suggestions System
 *
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

class Trie {
    children;
    isWord;
    maxSuggested;
    currentSuffix;
    wordsList;
    constructor(maxSuggested) {
        this.maxSuggested = maxSuggested || 1;
        this.children = {};
        this.isWord = false;
    }

    /**
     * @param {string} prefix
     * @return {Trie}
     */
    _contains(prefix) {
        let node = this;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this;
        for (let char of word) {
            node.children[char] || (node.children[char] = new Trie());
            node = node.children[char];
        }
        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this._contains(word);
        return node && node.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return !!this._contains(prefix);
    }

    /**
     *
     * @param {string} prefix
     * @param {Trie} node
     * @param {number} maxCount
     */
    _dfs(prefix, node, maxCount) {
        if (node.isWord && this.wordsList.length < maxCount) {
            this.wordsList.push(prefix + this.currentSuffix.join(""));
        }
        for (let char in node.children) {
            if (this.wordsList.length < maxCount) {
                this.currentSuffix.push(char);

                this._dfs(prefix, node.children[char], maxCount);
                this.currentSuffix.pop();
            } else {
                return;
            }
        }
    }

    /**
     *
     * @param {string} prefix
     * @param {number} maxCount
     * @returns string[]
     */
    keysStartsWith(prefix, maxCount = 1) {
        this.wordsList = [];
        this.currentSuffix = [];
        let node = this._contains(prefix);
        if (!!node) {
            this._dfs(prefix, node, maxCount);
        }
        return this.wordsList;
    }
}

var suggestedProducts = function (products, searchWord) {
    let n = searchWord.length;
    const sss = new Trie();

    products.sort();
    for (let product of products) {
        sss.insert(product);
    }
    let prefix;
    let result = [];
    for (let i = 1; i <= n; i++) {
        prefix = searchWord.substring(0, i);
        result.push(sss.keysStartsWith(prefix, 3));
    }
    return result;
};

console.log(suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));
console.log(suggestedProducts(["havana"], "havana"));
