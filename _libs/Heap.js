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
        this.values[0] = this.values.pop();
        this._siftDown(0);
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

// Пример использования:
// Минимальная куча с объектами
const minHeap = new Heap({
    getKeyFn: (item) => item.value,
    type: "min",
});
minHeap.push({ value: 5 });
minHeap.push({ value: 3 });
minHeap.push({ value: 10 });
console.log(minHeap.pop()); // { value: 3 }

// Максимальная куча с объектами
const maxHeap = new Heap({
    getKeyFn: (item) => item.value,
    type: "max",
});
maxHeap.push({ value: 5 });
maxHeap.push({ value: 3 });
maxHeap.push({ value: 10 });
console.log(maxHeap.pop()); // { value: 10 }
