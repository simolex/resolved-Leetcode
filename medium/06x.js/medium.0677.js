var MapSum = function () {
    this.children = {};
    this.costs = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    let node = this;
    for (let char of key) {
        node.children[char] || (node.children[char] = new MapSum());
        node = node.children[char];
        node.costs.set(key, val);
    }
};

/**
 * 677. Map Sum Pairs
 *
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let node = this;
    for (let char of prefix) {
        if (!node.children[char]) return 0;
        node = node.children[char];
    }
    return [...node.costs.values()].reduce((sum, v) => sum + v, 0);
};

var obj = new MapSum();
obj.insert("apple", 3);
obj.insert("app", 2);
obj.insert("apple", 2);

console.dir(obj, { depth: 10 });
console.log(obj.sum("ap"));
