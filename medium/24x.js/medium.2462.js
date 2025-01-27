/**
 * 2462. Total Cost to Hire K Workers
 *
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
class MinHeap {
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

            if (this.values[parentIndex] > current) {
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
            swap = swap === null && rightChild <= leftChild ? rightChildIndex : leftChildIndex;
            if (this.values[swap] < current) {
                this.values[index] = this.values[swap];
                this.values[swap] = current;
                index = swap;
            } else break;
        }
    }
    peak() {
        let index = 0;
        return this.values[index];
    }

    pop() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._balancing(index);
        this.values.pop();
        return min;
    }

    getValues() {
        return this.values;
    }
    size() {
        return this.values.length;
    }
}

var totalCost = function (costs, k, candidates) {
    let n = costs.length;
    let left = 0;
    let right = n;
    let totalCosts = 0;

    const leftHeap = new MinHeap();
    const rightHeap = new MinHeap();

    while (k > 0) {
        // console.log(k, left, right, leftHeap.getValues(), rightHeap.getValues());
        if (left < right && (leftHeap.size() < candidates || rightHeap.size() < candidates)) {
            if (leftHeap.size() <= rightHeap.size()) {
                leftHeap.push(costs[left++]);
            } else {
                rightHeap.push(costs[--right]);
            }
        } else {
            if (leftHeap.size() === 0 && rightHeap.size() > 0) {
                totalCosts += rightHeap.pop();
            } else if (leftHeap.size() > 0 && rightHeap.size() === 0) {
                totalCosts += leftHeap.pop();
            } else if (leftHeap.size() > 0 && rightHeap.size() > 0 && leftHeap.peak() > rightHeap.peak()) {
                totalCosts += rightHeap.pop();
            } else {
                totalCosts += leftHeap.pop();
            }
            k--;
        }
    }
    return totalCosts;
};

console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4));
console.log(totalCost([1, 2, 4, 1], 3, 3));
console.log(totalCost([57, 33, 26, 76, 14, 67, 24, 90, 72, 37, 30], 11, 2));
