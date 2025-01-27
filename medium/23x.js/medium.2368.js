/**
 * 2368. Reachable Nodes With Restrictions
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
    const stack = [];
    const visited = Array(n).fill(false);

    let count = 0;

    const graph = new Map();

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

    restricted.forEach((r) => (visited[r] = true));

    let current;
    stack.push(0);

    while (stack.length) {
        current = stack.pop();
        if (!visited[current]) {
            count++;
            visited[current] = true;

            graph.get(current).forEach((v) => {
                if (!visited[v]) {
                    stack.push(v);
                }
            });
        }
    }
    return count;
};
