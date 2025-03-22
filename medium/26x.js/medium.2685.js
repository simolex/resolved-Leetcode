/**
 * 2685. Count the Number of Complete Components
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    const dsu = Array.from({ length: n }, (_, i) => i);
    const size = Array(n).fill(1);
    const graph = Array.from({ length: n }, (_, i) => new Set([i]));
    const completeComponents = new Map();

    const find = (x) => {
        if (dsu[x] !== x) {
            dsu[x] = find(dsu[x]);
        }
        return dsu[x];
    };

    const unioun = (x, y) => {
        x = find(x);
        y = find(y);
        if (x !== y) {
            dsu[y] = x;
            size[x] += size[y];
        }
    };

    for (const [u, v] of edges) {
        unioun(u, v);
        graph[u].add(v);
        graph[v].add(u);
    }

    for (let i = 0; i < n; i++) {
        const componentId = find(i);
        completeComponents.has(componentId) || completeComponents.set(componentId, { isComplete: true });
        completeComponents.get(componentId).isComplete &&= size[componentId] === graph[i].size;
    }

    let count = 0;
    completeComponents.forEach(({ isComplete }) => isComplete && count++);

    return count;
};

// Version #2
var countCompleteComponents = function (n, edges) {
    const dsu = Array.from({ length: n }, (_, i) => i);
    const edgeCount = Array(n).fill(0);
    const size = Array(n).fill(1);
    const components = new Set();

    const find = (x) => {
        if (dsu[x] !== x) {
            dsu[x] = find(dsu[x]);
        }
        return dsu[x];
    };

    const unioun = (x, y) => {
        x = find(x);
        y = find(y);
        if (x !== y) {
            dsu[y] = x;
            size[x] += size[y];
            edgeCount[x] += edgeCount[y];
        }
        edgeCount[x]++;
    };

    for (const [u, v] of edges) {
        unioun(u, v);
    }

    let count = 0;
    let componentId;
    for (let i = 0; i < n; i++) {
        componentId = find(i);
        if (size[componentId] !== 1) {
            components.add(componentId);
        } else {
            count++;
        }
    }

    components.forEach((i) => edgeCount[i] === (size[i] * (size[i] - 1)) / 2 && count++);

    return count;
};

// Version #3
var countCompleteComponents = function (n, edges) {
    const bitsSet = Array.from({ length: n }, (_, i) => Math.pow(2, i));

    const hash = Array.from(bitsSet);
    const bitsCount = Array(n).fill(0);
    for (let [u, v] of edges) {
        hash[u] += bitsSet[v];
        hash[v] += bitsSet[u];

        bitsCount[u]++;
        bitsCount[v]++;
    }

    const freq = new Map();
    const counting = new Map();
    for (let i = 0; i < n; i++) {
        counting.set(hash[i], (counting.get(hash[i]) || 0) + bitsCount[i]);
        freq.set(hash[i], -~freq.get(hash[i]));
    }

    let count = 0;
    for (let [sum, cnt] of freq.entries()) {
        if (cnt * (cnt - 1) === counting.get(sum)) count++;
    }

    return count;
};

console.log(
    countCompleteComponents(6, [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4]
    ])
);
console.log(
    countCompleteComponents(6, [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
        [3, 5]
    ])
);
console.log(
    countCompleteComponents(37, [
        [27, 20],
        [28, 20],
        [17, 20],
        [7, 17],
        [35, 28],
        [1, 27],
        [12, 7],
        [3, 35],
        [32, 17],
        [29, 12],
        [24, 17],
        [31, 7],
        [4, 12],
        [11, 25],
        [26, 25],
        [5, 11],
        [16, 26],
        [13, 5],
        [2, 25],
        [8, 2],
        [10, 26],
        [23, 10],
        [23, 13],
        [5, 10],
        [8, 5],
        [2, 11],
        [6, 9],
        [0, 9],
        [19, 6],
        [15, 19],
        [34, 6],
        [33, 19],
        [36, 0],
        [21, 0],
        [14, 9],
        [30, 15],
        [18, 19],
        [22, 33],
        [0, 33],
        [34, 18],
        [9, 19],
        [19, 36],
        [9, 22]
    ])
);
