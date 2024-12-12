/**
 * 380. Insert Delete GetRandom O(1)
 */

var RandomizedSet = function () {
    this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    const result = !this.set.has(val);
    this.set.add(val);
    return result;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    const result = this.set.has(val);
    this.set.delete(val);
    return result;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return [...this.set][Math.trunc(this.set.size * Math.random())];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
