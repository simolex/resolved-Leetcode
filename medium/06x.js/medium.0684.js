/**
 * 684. Redundant Connection
 *
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let e = edges.length;
    const verteces = new Map();

    let from, to;
    for (let i = 0; i < e; i++) {
        [from, to] = edges[i];

        if (!verteces.has(from)) {
            verteces.set(from, new Set());
        }
        verteces.get(from).add(to);

        if (!verteces.has(to)) {
            verteces.set(to, new Set());
        }
        verteces.get(to).add(from);
    }

    let stack = [];
    verteces.forEach((neighbours, vertex) => {
        if (neighbours.size === 1) {
            stack.push(vertex);
        }
    });

    let current, next;
    while (stack.length > 0) {
        current = stack.pop();

        next = verteces.get(current).keys().next().value;
        verteces.delete(current);
        verteces.get(next).delete(current);
        if (verteces.get(next).size === 1) {
            stack.push(next);
        }
    }

    for (let i = e - 1; i >= 0; i--) {
        [from, to] = edges[i];

        if (verteces.has(from) && verteces.get(from).has(to)) {
            return edges[i];
        }
    }
};

console.log(
    findRedundantConnection([
        [1, 2],
        [1, 3],
        [2, 3]
    ])
);
console.log(
    findRedundantConnection([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5]
    ])
);
console.log(
    findRedundantConnection([
        [3, 4],
        [1, 2],
        [2, 4],
        [3, 5],
        [2, 5]
    ])
);
console.log(
    findRedundantConnection([
        [9, 10],
        [5, 8],
        [2, 6],
        [1, 5],
        [3, 8],
        [4, 9],
        [8, 10],
        [4, 10],
        [6, 8],
        [7, 9]
    ])
);
