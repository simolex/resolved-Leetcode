/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
    const longestPathFromRoot = (n, tree, root) => {
        const stack = [];
        const visited = Array(n).fill(false);
        const parent = Array(n).fill(null);

        let maxPath = 0;
        let thatNode = root;

        let current, pathLength;
        stack.push([root, 0]);
        while (stack.length) {
            [current, pathLength] = stack.pop();

            if (pathLength > maxPath) {
                thatNode = current;
                maxPath = pathLength;
            }
            if (!visited[current]) {
                visited[current] = true;

                tree.get(current).forEach((v) => {
                    if (!visited[v]) {
                        parent[v] = current;
                        stack.push([v, pathLength + 1]);
                    }
                });
            }
        }
        return [maxPath, thatNode];
    };

    const getDiameter = (edges) => {
        if (edges.length == 0) {
            return 0;
        }

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

        const n = Math.max(...graph.keys());

        const [maxPath, maxNode] = longestPathFromRoot(n, graph, 0);
        const [longestPath, longestNode] = longestPathFromRoot(n, graph, maxNode);

        return longestPath;
    };

    const diam1 = getDiameter(edges1);
    const diam2 = getDiameter(edges2);

    return Math.max(diam1, diam2, Math.ceil(diam1 / 2) + Math.ceil(diam2 / 2) + 1); //(diam1 == 0 || diam2 == 0 ? 0 : 1);
};

console.log(
    minimumDiameterAfterMerge(
        [
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        [[0, 1]]
    )
); //3
console.log(
    minimumDiameterAfterMerge(
        [
            [0, 1],
            [0, 2],
            [0, 3],
            [2, 4],
            [2, 5],
            [3, 6],
            [2, 7],
        ],
        [
            [0, 1],
            [0, 2],
            [0, 3],
            [2, 4],
            [2, 5],
            [3, 6],
            [2, 7],
        ]
    )
); //5
console.log(minimumDiameterAfterMerge([], [])); //1
console.log(
    minimumDiameterAfterMerge(
        [
            [0, 1],
            [2, 0],
            [3, 2],
            [3, 6],
            [8, 7],
            [4, 8],
            [5, 4],
            [3, 5],
            [3, 9],
        ],
        [
            [0, 1],
            [0, 2],
            [0, 3],
        ]
    )
); //7
