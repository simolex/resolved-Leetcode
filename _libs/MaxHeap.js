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
