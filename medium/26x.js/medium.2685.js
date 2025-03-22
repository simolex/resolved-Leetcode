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
