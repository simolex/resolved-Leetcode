/**
 * 1466. Reorder Routes to Make All Paths Lead to the City Zero
 *
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    let currentNode;
    let countReorders = 0;
    const stack = [0];
    const tree = new Map();
    const visited = Array(n).fill(false);

    connections.forEach(([a, b]) => {
        if (!tree.has(a)) {
            tree.set(a, new Map());
        }
        if (!tree.has(b)) {
            tree.set(b, new Map());
        }
        tree.get(a).set(b, true);
        tree.get(b).set(a, false);
    });

    while (stack.length) {
        currentNode = stack.pop();
        visited[currentNode] = true;

        tree.get(currentNode).forEach((exist, node) => {
            if (!visited[node]) {
                if (exist) countReorders++;
                stack.push(node);
            }
        });
    }

    return countReorders;
};

console.log(
    minReorder(6, [
        [0, 1],
        [1, 3],
        [2, 3],
        [4, 0],
        [4, 5]
    ])
);

console.log(
    minReorder(5, [
        [1, 0],
        [1, 2],
        [3, 2],
        [3, 4]
    ])
);

console.log(
    minReorder(3, [
        [1, 0],
        [2, 0]
    ])
);
