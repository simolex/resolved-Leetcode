/**
 * 2503. Maximum Number of Points From Grid Queries
 *
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function (grid, queries) {
    let n = grid.length;
    let m = grid[0].length;
    let k = queries.length;
    const visited = Array.from({ length: n }, () => Array(m).fill(0));

    const resQueries = Array(k).fill(0);
    const idxQueries = Array.from({ length: k }, (_, i) => i);
    idxQueries.sort((a, b) => queries[a] - queries[b]);

    const nextStep = (i, j, maxPrev = 0, rightIdxQuery = 0) => {
        maxPrev = Math.max(maxPrev, grid[i][j]);

        visited[i][j] = true;
        while (maxPrev >= queries[idxQueries[rightIdxQuery]]) {
            rightIdxQuery++;
        }

        if (rightIdxQuery !== k) {
            resQueries[rightIdxQuery]++;
            if (i + 1 < n) {
                if (!visited[i + 1][j]) nextStep(i + 1, j, maxPrev, maxPrev, rightIdxQuery);
                else nextStep(i + 1, j, maxPrev, rightIdxQuery);
            }
            if (j + 1 < m && grid[i][j + 1] > 0) nextStep(i, j + 1, maxPrev, rightIdxQuery);
        }
    };

    nextStep(0, 0);
    for (let i = 1; i < k; i++) {
        resQueries[i] = resQueries[i - 1] + resQueries[i];
    }

    const result = Array(k);
    for (let i = 0; i < k; i++) {
        result[idxQueries[i]] = resQueries[i];
    }

    return result;
};

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
var maxPoints = function (grid, queries) {
    let n = grid.length;
    let m = grid[0].length;
    let k = queries.length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    const heap = new Heap({ getKeyFn: (item) => item.value, type: "min" });
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const idxQueries = Array.from({ length: k }, (_, i) => i);
    idxQueries.sort((a, b) => queries[a] - queries[b]);

    let count = 0;
    visited[0][0] = true;
    heap.push({ value: grid[0][0], i: 0, j: 0 });

    return idxQueries.reduce((res, idx) => {
        while (heap.size() > 0 && heap.peek().value < queries[idx]) {
            let { i, j } = heap.pop();
            count++;

            directions.forEach(([dI, dJ]) => {
                dI += i;
                dJ += j;
                if (dI >= 0 && dI < n && dJ >= 0 && dJ < m && !visited[dI][dJ]) {
                    heap.push({ value: grid[dI][dJ], i: dI, j: dJ });
                    visited[dI][dJ] = true;
                }
            });
        }
        res[idx] = count;
        return res;
    }, Array(k));
};

console.log(
    maxPoints(
        [
            [1, 2, 3],
            [2, 5, 7],
            [3, 5, 1]
        ],
        [5, 6, 2]
    )
);
console.log(
    maxPoints(
        [
            [5, 2, 1],
            [1, 1, 2]
        ],
        [3]
    )
);
