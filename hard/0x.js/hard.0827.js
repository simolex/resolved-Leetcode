/**
 * 827. Making A Large Island
 *
 * @param {number[][]} grid
 * @return {number}
 */

class DSU {
    parent;
    weight;
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.weight = Array(n).fill(1);
    }

    find(v) {
        return this.parent[v] === v ? v : (this.parent[v] = this.find(this.parent[v]));
    }

    union(a, b) {
        a = this.find(a);
        b = this.find(b);
        if (this.weight[a] > this.weight[b]) {
            [a, b] = [b, a];
        }
        this.weight[b] += this.weight[a];
        this.parent[a] = b;
    }

    size(v) {
        v = this.find(v);
        return this.weight[v];
    }
}

var largestIsland = function (grid) {
    let n = grid.length;
    let m = grid[0].length;

    const dSet = new DSU(n * m);

    const state = {
        isWater: 0,
        isLand: 1,
        isVisited: 2,
    };

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const getIndex = (i, j) => i * m + j;
    const isGrid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;

    const queue = [];
    let pntQueue = 0;
    let curI, curJ, curIndex;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === state.isLand) {
                grid[i][j] = state.isVisited;

                queue.push(i, j);
                while (pntQueue < queue.length) {
                    curI = queue[pntQueue++];
                    curJ = queue[pntQueue++];
                    curIndex = getIndex(curI, curJ);

                    directions.forEach(([dI, dJ]) => {
                        dI += curI;
                        dJ += curJ;
                        if (isGrid(dI, dJ) && grid[dI][dJ] === state.isLand) {
                            grid[dI][dJ] = state.isVisited;
                            dSet.union(curIndex, getIndex(dI, dJ));
                            queue.push(dI, dJ);
                        }
                    });
                }
            }
        }
    }

    let maxIsland = 0;
    let curSize, neigSize;
    let neighbours = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === state.isWater) {
                neighbours.clear();

                neigSize = directions.reduce((size, [dI, dJ]) => {
                    dI += i;
                    dJ += j;
                    curIndex = getIndex(dI, dJ);

                    if (
                        isGrid(dI, dJ) &&
                        !neighbours.has(dSet.find(curIndex)) &&
                        grid[dI][dJ] === state.isVisited
                    ) {
                        curSize = dSet.size(curIndex);
                        neighbours.add(dSet.find(curIndex));
                    } else {
                        curSize = 0;
                    }
                    return size + curSize;
                }, 0);
                maxIsland = Math.max(maxIsland, neigSize + 1);
            }
        }
    }
    return maxIsland > 0 ? maxIsland : dSet.size(0);
};

console.log(
    largestIsland([
        [1, 0],
        [0, 1],
    ])
);

console.log(
    largestIsland([
        [1, 1],
        [1, 0],
    ])
);

console.log(
    largestIsland([
        [1, 1],
        [1, 1],
    ])
);

console.log(
    largestIsland([
        [1, 0],
        [1, 1],
    ])
);
