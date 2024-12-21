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
    const graph = new Map();
    const stack = [];
    const visited = Array(n).fill(false);
    const neighborsCount = Array(n).fill(0);
    const getLeaves = () => {
        for (let i = 0; i < neighborsCount.length; i++) {
            if (neighborsCount[i] <= 1 && !visited[i]) {
                stack.push(i);
            }
        }
        return;
    };
    edges.forEach((edge) => {
        if (!graph.has(edge[0])) {
            graph.set(edge[0], []);
        }
        graph.get(edge[0]).push(edge[1]);
        neighborsCount[edge[0]]++;

        if (!graph.has(edge[1])) {
            graph.set(edge[1], []);
        }
        graph.get(edge[1]).push(edge[0]);
        neighborsCount[edge[1]]++;
    });

    let current;
    let pntFront = 0;
    let parent;
    let rest;
    let count = 0;
    getLeaves();
    while (pntFront < stack.length) {
        const last = stack.length;
        while (pntFront < last) {
            current = stack[pntFront];
            visited[current] = true;
            pntFront++;

            if (values[current] % k === 0) {
                count++;
                rest = 0;
            } else {
                rest = values[current];
            }

            for (let j = 0; j < graph.get(current).length; j++) {
                parent = graph.get(current)[j];
                if (!visited[parent]) {
                    stack.push(parent);
                    neighborsCount[parent]--;
                    values[parent] += rest;
                }
            }
        }
    }
    console.log(graph);
    console.log(neighborsCount);
    console.log(count);
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
