/**
 * 2558. Take Gifts From the Richest Pile
 *
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
class MaxHeap {
    constructor(initValues) {
        if (initValues) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._balancing(i);
            }
        } else this.values = [];
    }
    push(element) {
        this.values.push(element);
        let index = this.values.length - 1;

        while (index > 0) {
            const current = this.values[index];
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.values[parentIndex] < current) {
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = current;
                index = parentIndex;
            } else break;
        }
    }
    _balancing(index) {
        const length = this.values.length;
        while (index * 2 + 1 <= length - 1) {
            const current = this.values[index];
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            leftChild = this.values[leftChildIndex];
            rightChild = this.values[rightChildIndex];

            if (rightChildIndex === length) {
                swap = leftChild;
            }
            swap = swap === null && rightChild >= leftChild ? rightChildIndex : leftChildIndex;
            if (this.values[swap] > current) {
                this.values[index] = this.values[swap];
                this.values[swap] = current;
                index = swap;
            } else break;
        }
    }
    pop() {
        let index = 0;
        const max = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._balancing(index);
        this.values.pop();
        return max;
    }
    getValues() {
        return this.values;
    }
    getSize() {
        return this.values.length;
    }
}

var pickGifts = function (gifts, k) {
    const heap = new MaxHeap(gifts);
    for (let i = 0; i < k; i++) {
        const val = heap.pop();
        heap.push(Math.floor(Math.sqrt(val)));
    }

    let countGift = 0;
    for (let gift of heap.getValues()) {
        countGift += gift;
    }
    return countGift;
};

console.log(pickGifts([25, 64, 9, 4, 100], 4));
