/**
 * 1792. Maximum Average Pass Ratio
 *
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */

class MaxHeap {
    constructor(
        initValues,
        getKeyFn = function (item) {
            return item.delta;
        }
    ) {
        this._getKey = getKeyFn;

        if (initValues) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._siftDown(i);
            }
        } else this.values = [];
    }

    push(value) {
        let index = this.values.length;
        this.values.push(value);
        this._siftUp(index);
    }

    pop() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._siftDown(index);
        this.values.pop();
        return min;
    }

    peek() {
        if (this.isEmpty()) {
            return false;
        }
        return this.values[0];
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
        while (index * 2 + 1 < length - 1) {
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
                this._getKey(rightChild) >= this._getKey(leftChild) && swap === null ? rightChildIndex : leftChildIndex;
            if (this._getKey(this.values[swap]) > this._getKey(this.values[index])) {
                this._swapItems(index, swap);
                index = swap;
            } else break;
        }
    }
}

var maxAverageRatio = function (classes, extraStudents) {
    let result;
    const n = classes.length;
    const contest = new MaxHeap();

    const initRate = classes.reduce((sum, [pass, total]) => sum + pass / total, 0);

    classes.forEach(([pass, total], index) => {
        contest.push({
            delta: (pass + 1) / (total + 1) - pass / total,
            pass: pass + 1,
            total: total + 1
        });
    });

    result = initRate;
    while (extraStudents > 0) {
        const { delta, pass, total, index } = contest.pop();
        result += delta;

        contest.push({
            delta: (pass + 1) / (total + 1) - pass / total,
            pass: pass + 1,
            total: total + 1
        });

        extraStudents--;
    }

    return result / n;
};

console.log(
    maxAverageRatio(
        [
            [2, 2],
            [1, 2],
            [3, 5]
        ],
        2
    )
);
