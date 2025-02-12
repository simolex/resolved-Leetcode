/**
 * 2349. Design a Number Container System
 */

var NumberContainers = function () {};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

//////
class NumberContainers {
    constructor() {
        this.numberToIndices = new Map();
        this.indexToNumbers = new Map();
    }

    change(index, number) {
        // Обновляем отображение индекса на число
        this.indexToNumbers.set(index, number);

        // Добавляем индекс в минимальную кучу для этого числа
        if (!this.numberToIndices.has(number)) {
            this.numberToIndices.set(number, new MinHeap());
        }
        this.numberToIndices.get(number).insert(index);
    }

    find(number) {
        // Если число не существует в нашей карте
        if (!this.numberToIndices.has(number)) {
            return -1;
        }

        // Получаем минимальную кучу для этого числа
        const minHeap = this.numberToIndices.get(number);

        // Проверяем верхний элемент, пока не найдем действительный индекс
        while (!minHeap.isEmpty()) {
            const index = minHeap.peek();

            // Если индекс все еще соответствует нашему целевому числу, возвращаем его
            if (this.indexToNumbers.get(index) === number) {
                return index;
            }

            // Иначе удаляем этот устаревший индекс
            minHeap.extractMin();
        }

        return -1;
    }
}

// Реализация минимальной кучи (MinHeap)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.isEmpty()) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [
                this.heap[smallestIndex],
                this.heap[index],
            ];
            index = smallestIndex;
        }
    }
}
