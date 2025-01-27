/**
 * 1962. Remove Stones to Minimize the Total
 *
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
class MinHeap {
    constructor(initValues) {
        if (initValues) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._siftDown(i);
            }
        } else this.values = [];
    }

    // replace(oldValue, newValue) {
    //     let oldIndex;
    //     if (!this.dictionary.has(newValue)) {
    //         if (this.dictionary.has(oldValue)) {
    //             oldIndex = this.dictionary.get(oldValue);

    //             if (this.values[oldIndex].count <= 1) {
    //                 this.dictionary.delete(oldValue);
    //                 this.dictionary.set(newValue, oldIndex);
    //                 this.values[oldIndex] = { value: newValue, count: 1 };

    //                 this._siftUp(oldIndex);
    //                 oldIndex = this.dictionary.get(newValue);
    //                 this._siftDown(oldIndex);
    //                 return;
    //             }
    //         }
    //     }
    //     this.remove(oldValue);
    //     this.add(newValue);
    // }

    // remove(value) {
    //     let index;
    //     if (this.dictionary.has(value)) {
    //         index = this.dictionary.get(value);

    //         this.values[index].count--;
    //         if (this.values[index].count <= 0) {
    //             this.dictionary.set(Number.NEGATIVE_INFINITY, index);
    //             this.values[index].value = Number.NEGATIVE_INFINITY;
    //             this._siftUp(index);
    //             this.getMin();
    //             this.dictionary.delete(value);
    //             this.dictionary.delete(Number.NEGATIVE_INFINITY);
    //         }
    //     }
    // }

    getMin() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._siftDown(index);
        this.values.pop();
        return min;
    }

    getValues() {
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _getKey(item) {
        return item;
    }

    _swapItems(index_1, index_2) {
        const current = this.values[index_1];
        this.values[index_1] = this.values[index_2];
        this.values[index_2] = current;

        // this.dictionary.set(this.values[index_1].value, index_1);
        // this.dictionary.set(this.values[index_2].value, index_2);
    }

    _siftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this._getKey(this.values[parentIndex]) > this._getKey(this.values[index])) {
                this._swapItems(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    _siftDown(index) {
        const length = this.values.length;
        while (index * 2 + 1 <= length - 1) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            leftChild = this.values[leftChildIndex];
            rightChild = this.values[rightChildIndex];

            if (rightChildIndex === length) {
                swap = leftChild;
            }
            swap =
                this._getKey(rightChild) <= this._getKey(leftChild) && swap === null ? rightChildIndex : leftChildIndex;
            if (this._getKey(this.values[swap]) < this._getKey(this.values[index])) {
                this._swapItems(index, swap);
                index = swap;
            } else break;
        }
    }
}

var minStoneSum = function (piles, k) {
    const heap = new MaxHeap(piles);
    for (let i = 0; i < k; i++) {
        const val = heap.pop();
        heap.push(Math.ceil(val / 2));
    }

    let countStone = 0;
    for (let stones of heap.getValues()) {
        countStone += stones;
    }
    return countStone;
};

console.log(minStoneSum([5, 4, 9], 2));
console.log(minStoneSum([4, 3, 6, 7], 3));
