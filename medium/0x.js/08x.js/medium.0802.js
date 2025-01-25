/**
 * 802. Find Eventual Safe States
 *
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    let n = graph.length;
    const stack = [];
    const result = [];
    const parentsSet = Array.from({ length: n }, () => new Set());
    const graphSet = graph.map((childs, node) => {
        for (let child of childs) {
            parentsSet[child].add(node);
        }

        if (childs.length === 0) {
            stack.push(node);
        }

        return new Set(childs);
    });

    let currentNode;
    while (stack.length > 0) {
        currentNode = stack.pop();
        result.push(currentNode);

        parentsSet[currentNode].forEach((parent, _, set) => {
            graphSet[parent].delete(currentNode);
            if (graphSet[parent].size === 0) {
                stack.push(parent);
            }
        });
    }
    result.sort((a, b) => a - b);
    return result;
};

console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
console.log(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]));
