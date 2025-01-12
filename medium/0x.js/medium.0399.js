/**
 * 399. Evaluate Division
 *
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const stack = [];
    const tree = new Map();
    const visited = new Set();

    equations.forEach(([a, b], idx) => {
        if (!tree.has(a)) {
            tree.set(a, new Map());
        }
        if (!tree.has(b)) {
            tree.set(b, new Map());
        }
        tree.get(a).set(b, values[idx]);
        tree.get(b).set(a, 1 / values[idx]);
    });

    let currentVar;
    let currentValue;

    return queries.map(([u, v]) => {
        let result = 1;
        stack.length = 0;
        visited.clear();
        stack.push(u, 1);

        if (!tree.has(u) && !tree.has(v)) {
            return -1;
        }

        while (stack.length) {
            currentValue = stack.pop();
            currentVar = stack.pop();

            result *= currentValue;
            if (v === currentVar) {
                return result;
            }

            if (!visited.has(currentVar)) {
                visited.add(currentVar);
                stack.push(currentVar, 1 / currentValue);

                tree.get(currentVar).forEach((value, node) => {
                    if (!visited.has(node)) {
                        stack.push(node, value);
                    }
                });
            }
        }
        return -1;
    });
};

console.log(
    calcEquation(
        [
            ["a", "b"],
            ["b", "c"]
        ],
        [2.0, 3.0],
        [
            ["a", "c"],
            ["b", "a"],
            ["a", "e"],
            ["a", "a"],
            ["x", "x"]
        ]
    )
);

console.log(
    calcEquation(
        [
            ["a", "b"],
            ["b", "c"],
            ["bc", "cd"]
        ],
        [1.5, 2.5, 5.0],
        [
            ["a", "c"],
            ["c", "b"],
            ["bc", "cd"],
            ["cd", "bc"]
        ]
    )
);

console.log(
    calcEquation(
        [["a", "b"]],
        [0.5],
        [
            ["a", "b"],
            ["b", "a"],
            ["a", "c"],
            ["x", "y"]
        ]
    )
);
