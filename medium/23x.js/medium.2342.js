/**
 * 2342. Max Sum of a Pair With Equal Sum of Digits
 *
 * @param {number[]} nums
 * @return {number}
 */
class MaxHeap {
    constructor(props) {
        const { getKeyFn, initValues } = props || {};

        this._getKey =
            getKeyFn ||
            function (item) {
                return item;
            };
        this.values = initValues || [];

        if (this.values.length > 0) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._siftDown(i);
            }
        }
    }

    push(value) {
        let index = this.values.length;
        this.values.push(value);
        this._siftUp(index);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        let index = 0;
        const top = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._siftDown(index);
        this.values.pop();
        return top;
    }

    peek() {
        if (this.isEmpty()) {
            return false;
        }
        return this.values[0];
    }

    size() {
        return this.values.length;
    }

    getAllValues() {
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _swapItems(index_1, index_2) {
        const current = this.values[index_1];
        this.values[index_1] = this.values[index_2];
        this.values[index_2] = current;
    }

    _siftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this._getKey(this.values[parentIndex]) < this._getKey(this.values[index])) {
                this._swapItems(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    _siftDown(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = leftChildIndex;

            if (
                rightChildIndex < length &&
                this._getKey(this.values[rightChildIndex]) >
                    this._getKey(this.values[leftChildIndex])
            ) {
                swap = rightChildIndex;
            }

            if (this._getKey(this.values[swap]) > this._getKey(this.values[index])) {
                this._swapItems(index, swap);
                index = swap;
            } else break;
        }
    }
}

var maximumSum = function (nums) {
    let hash;
    let value;

    const heap = new MaxHeap();
    const mapHashes = new Map();

    for (let num of nums) {
        hash = 0;
        value = num;
        while (num > 0) {
            hash += num % 10;
            num = Math.trunc(num / 10);
        }

        mapHashes.has(hash) || mapHashes.set(hash, new MaxHeap());
        mapHashes.get(hash).push(value);
    }

    let max = -1;
    for (let groupHeap of mapHashes.values()) {
        if (groupHeap.size() > 1) {
            max = Math.max(max, groupHeap.pop() + groupHeap.pop());
        }
    }
    return max;
};

// Version #2
var maximumSum = function (nums) {
    let hash;
    let value;
    let max = -1;

    const mapHashes = new Map();

    for (let num of nums) {
        hash = 0;
        value = num;
        while (num > 0) {
            hash += num % 10;
            num = Math.trunc(num / 10);
        }
        if (mapHashes.has(hash)) {
            max = Math.max(max, mapHashes.get(hash) + value);
            mapHashes.set(hash, Math.max(mapHashes.get(hash), value));
        } else {
            mapHashes.set(hash, value);
        }
    }

    return max;
};

// Version #3
var maximumSum = function (nums) {
    let hash;
    let value;
    let max = -1;

    const mapHashes = {};

    for (let num of nums) {
        hash = 0;
        value = num;
        while (num > 0) {
            hash += num % 10;
            num = Math.floor(num / 10);
        }
        if (mapHashes[hash]) {
            max = Math.max(max, mapHashes[hash] + value);
            mapHashes[hash] = Math.max(mapHashes[hash], value);
        } else {
            mapHashes[hash] = value;
        }
    }

    return max;
};

console.log(maximumSum([18, 43, 36, 13, 7]));
console.log(maximumSum([10, 12, 19, 14]));
console.log(
    maximumSum([
        368, 369, 307, 304, 384, 138, 90, 279, 35, 396, 114, 328, 251, 364, 300, 191, 438, 467, 183,
    ])
);
