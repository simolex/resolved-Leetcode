var Trie = function () {
    this.children = {};
    this.isWord = false;
};

/**
 * @param {string} prefix
 * @return {Trie}
 */
Trie.prototype._contains = function (prefix) {
    let node = this;
    for (let char of prefix) {
        if (!node.children[char]) return false;
        node = node.children[char];
    }
    return node;
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
    }
    node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this._contains(word);
    return node && node.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return !!this._contains(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
