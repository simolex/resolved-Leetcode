/**
 * 3108. Minimum Cost Walk in Weighted Graph
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
class DSU {
    parent;
    weight;
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.weight = Array(n).fill(1);
        this.weightEdges = Array(n).fill(Number.MAX_SAFE_INTEGER);
    }

    find(v) {
        return this.parent[v] === v ? v : (this.parent[v] = this.find(this.parent[v]));
    }

    union(a, b, weightEdge) {
        let a = this.find(a);
        let b = this.find(b);
        if (this.weight[a] > this.weight[b]) {
            [a, b] = [b, a];
        }
        this.weight[b] += this.weight[a];
        this.weightEdges[b] &= this.weightEdges[a] & weightEdge;
        this.parent[a] = b;
    }

    size(v) {
        let v = this.find(v);
        return this.weight[v];
    }

    weightPath(v) {
        let v = this.find(v);
        return this.weightEdges[v];
    }
}

var minimumCost = function (n, edges, query) {
    const set = new DSU(n);

    for (const [u, v, weight] of edges) {
        set.union(u, v, weight);
    }

    return query.map(([u, v]) => {
        if (set.find(u) !== set.find(v)) {
            return -1;
        }
        return set.weightPath(v);
    });
};

console.log(
    minimumCost(
        5,
        [
            [0, 1, 7],
            [1, 3, 7],
            [1, 2, 1],
        ],
        [
            [0, 3],
            [3, 4],
        ]
    )
);
console.log(
    minimumCost(
        3,
        [
            [0, 2, 7],
            [0, 1, 15],
            [1, 2, 6],
            [1, 2, 1],
        ],
        [[1, 2]]
    )
);
