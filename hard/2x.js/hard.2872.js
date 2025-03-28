/**
 * 2872. Maximum Number of K-Divisible Components
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function (n, edges, values, k) {
    if (n == 1) return 1;

    const graph = new Map();
    const stack = [];
    const visited = Array(n).fill(false);
    const parent = Array(n).fill(null);
    let countComponents = 0;

    edges.forEach(([u, v]) => {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        if (!graph.has(v)) {
            graph.set(v, []);
        }

        graph.get(v).push(u);
        graph.get(u).push(v);
    });

    let current;
    stack.push(0);
    while (stack.length) {
        current = stack.pop();

        if (!visited[current]) {
            visited[current] = true;
            stack.push(current);
            graph.get(current).forEach((v) => {
                if (!visited[v]) {
                    parent[v] = current;
                    stack.push(v);
                }
            });
        } else {
            if (values[current] % k === 0) {
                countComponents++;
            } else {
                values[parent[current]] += values[current];
            }
        }
    }

    return countComponents;
};

console.log(
    maxKDivisibleComponents(
        5,
        [
            [0, 2],
            [1, 2],
            [1, 3],
            [2, 4]
        ],
        [1, 8, 1, 4, 4],
        6
    )
);

console.log(
    maxKDivisibleComponents(
        7,
        [
            [0, 1],
            [0, 2],
            [1, 3],
            [1, 4],
            [2, 5],
            [2, 6]
        ],
        [3, 0, 6, 1, 5, 2, 1],
        3
    )
);

console.log(maxKDivisibleComponents(1, [], [3], 3));
