/**
 * 381. Insert Delete GetRandom O(1) - Duplicates allowed
 */

var RandomizedCollection = function () {
    this.multiset = new Map();
    this.positionHash = new Map();
    this.count = 0;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    this.positionHash.clear();

    let result = false;
    this.count++;

    if (!this.multiset.has(val)) {
        this.multiset.set(val, { count: 0 });
        result = true;
    }

    this.multiset.get(val).count++;

    return result;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    this.positionHash.clear();

    let result = this.multiset.has(val);

    if (result === true) {
        this.count--;
        this.multiset.get(val).count--;
        if (this.multiset.get(val).count === 0) {
            this.multiset.delete(val);
        }
    }
    return result;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function (i) {
    let position;
    if (i) {
        position = i;
    } else {
        position = Math.trunc(this.count * Math.random());
    }

    if (!this.positionHash.has(position)) {
        let current = 0;
        let index = 0;
        let iterator = this.multiset.values();
        let size;

        // console.log("ss", iterator.next().value);

        while (current + (size = iterator.next().value.count) <= position) {
            index++;
            current += size;
        }
        this.positionHash.set(position, index);
    }

    return [...this.multiset.keys()][this.positionHash.get(position)];
};

var obj = new RandomizedCollection();
var param_1 = obj.insert(1);
var param_1 = obj.insert(1);
var param_1 = obj.insert(100);
var param_3 = obj.getRandom(0);
var param_3 = obj.getRandom(1);
var param_3 = obj.getRandom(2);
