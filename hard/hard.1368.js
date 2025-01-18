/**
 * 1368. Minimum Cost to Make at Least One Valid Path in a Grid
 *
 * @param {number[][]} grid
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
    add(element) {
        this.values.push(element);
        let index = this.values.length - 1;

        while (index > 0) {
            const current = this.values[index];
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.values[parentIndex].value > current.value) {
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = current;
                index = parentIndex;
            } else break;
        }
    }
    _balancing(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length - 1) {
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
            swap = swap === null && rightChild.value <= leftChild.value ? rightChildIndex : leftChildIndex;
            if (this.values[swap].value < current.value) {
                this.values[index] = this.values[swap];
                this.values[swap] = current;
                index = swap;
            } else break;
        }
    }
    getMin() {
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

    isEmpty() {
        return this.values.length === 0;
    }
}

var minCost = function (grid) {
    let paths = {};
    let rows = grid.length;
    let cols = grid[0].length;

    const minDists = new MinHeap();
    const visited = new Array(rows * cols);
    const dists = new Array(rows * cols);

    dists.fill(Infinity, 0);
    dists[0] = 0;
    minDists.add({ value: 0, vertex: "0" });
    visited.fill(false);

    let countDirections = 4;
    let directions = [
        [0, 0],
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    let getVertexNumber = (r, c) => {
        return r * cols + c;
    };

    let setWeight = (from, to, weight) => {
        if (!paths[from]) {
            paths[from] = {};
        }
        paths[from][to] = weight;
    };

    const weightPath = (from, to) => paths[from][to];
    const pathFrom = (from) => paths[from];
    const getMinDistantion = () => minDists.getMin();

    let dr, dc, weight, from;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            from = getVertexNumber(r, c);
            for (let d = 1; d <= countDirections; d++) {
                dr = r + directions[d][0];
                dc = c + directions[d][1];
                if (dr >= 0 && dr < rows && dc >= 0 && dc < cols) {
                    weight = +(d !== grid[r][c]);
                    setWeight(from, getVertexNumber(dr, dc), weight);
                }
            }
        }
    }

    let minDistantion;
    let value;
    let currentLenPath;

    while (!minDists.isEmpty()) {
        minDistantion = getMinDistantion();
        visited[minDistantion.vertex] = true;
        currentLenPath = dists[minDistantion.vertex];
        for (let toVertex in pathFrom(minDistantion.vertex)) {
            value = weightPath(minDistantion.vertex, toVertex);
            if (value >= 0) {
                if (dists[toVertex] > currentLenPath + value) {
                    dists[toVertex] = currentLenPath + value;
                    minDists.add({ value: currentLenPath + value, vertex: toVertex });
                }
            }
        }
    }
    // console.log(grid);
    // console.log(paths);
    // console.log(dists);

    return dists[cols * rows - 1];
};
console.log(
    minCost(
        (grid = [
            [1, 1, 1, 1],
            [2, 2, 2, 2],
            [1, 1, 1, 1],
            [2, 2, 2, 2]
        ])
    )
);

console.log(
    minCost([
        [1, 1, 3],
        [3, 2, 2],
        [1, 1, 4]
    ])
);

console.log(
    minCost([
        [2, 2, 2],
        [2, 2, 2]
    ])
);
