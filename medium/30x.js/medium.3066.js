/**
 * 3066. Minimum Operations to Exceed Threshold Value II
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class Heap {
    constructor({ getKeyFn = (item) => item, type = "min", initValues = [] }) {
        this.getKey = getKeyFn; // Функция для извлечения ключа
        this.type = type; // 'min' или 'max'
        this.values = [...initValues];
        if (this.values.length > 0) {
            for (let i = Math.floor(this.values.length / 2) - 1; i >= 0; i--) {
                this._siftDown(i);
            }
        }
    }

    push(value) {
        this.values.push(value);
        this._siftUp(this.values.length - 1);
    }

    pop() {
        if (this.isEmpty()) return null;
        const top = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this._siftDown(0);
        this.values.pop();

        return top;
    }

    peek() {
        return this.isEmpty() ? null : this.values[0];
    }

    size() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }

    _compare(a, b) {
        const keyA = this.getKey(a);
        const keyB = this.getKey(b);
        if (this.type === "min") return keyA - keyB; // Минимальная куча
        return keyB - keyA; // Максимальная куча
    }

    _siftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this._compare(this.values[parentIndex], this.values[index]) > 0) {
                this._swap(index, parentIndex);
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
                this._compare(this.values[rightChildIndex], this.values[leftChildIndex]) < 0
            ) {
                swap = rightChildIndex;
            }

            if (this._compare(this.values[swap], this.values[index]) < 0) {
                this._swap(index, swap);
                index = swap;
            } else break;
        }
    }
}

var minOperations = function (nums, k) {
    const minHeap = new Heap({ initValues: nums });

    let count = 0;
    let x, y;
    while (minHeap.size() > 1 && minHeap.peek() < k) {
        x = minHeap.pop();
        y = minHeap.pop();
        minHeap.push(x * 2 + y);
        count++;
    }

    return count;
};
// Version #2 (with build-in PriorityQueue)
var minOperations = function (nums, k) {
    const minHeap = new PriorityQueue({ compare: (a, b) => a - b });

    for (const num of nums) {
        minHeap.enqueue(num);
    }

    let count = 0;
    let x, y;
    // console.log(minHeap)
    while (minHeap.size() > 1 && minHeap.front() < k) {
        x = minHeap.dequeue();
        y = minHeap.dequeue();
        minHeap.enqueue(x * 2 + y);
        count++;
    }

    return count;
};

console.log(minOperations([2, 11, 10, 1, 3], 10));
console.log(minOperations([1, 1, 2, 4, 9], 20));

new PriorityQueue({
    compare: (a, b) => {
        return a > b ? 1 : -1;
    },
});
