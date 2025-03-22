/**
 * 210. Course Schedule II
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = new Map();
    const visited = Array(numCourses).fill(-1);
    const result = [];

    for (let [next, prev] of prerequisites) {
        graph.has(prev) || graph.set(prev, new Set());
        graph.get(prev).add(next);
    }

    let current;
    const stack = [];
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] < 0) {
            stack.push(i);
            while (stack.length) {
                current = stack.pop();

                if (visited[current] < 0) {
                    visited[current] = 0;
                    stack.push(current);

                    if (graph.has(current)) {
                        for (let next of graph.get(current).values()) {
                            if (visited[next] === 0) {
                                return [];
                            }
                            if (visited[next] < 0) {
                                stack.push(next);
                            }
                        }
                    }
                } else {
                    if (visited[current] === 0) result.push(current);
                    visited[current] = 1;
                }
            }
        }
    }

    return result.reverse();
};

// console.log(findOrder(2, [[1, 0]]));
// console.log(
//     findOrder(4, [
//         [1, 0],
//         [2, 0],
//         [3, 1],
//         [3, 2]
//     ])
// );
// console.log(findOrder(1, []));

console.log(
    findOrder(8, [
        [1, 0],
        [2, 6],
        [1, 7],
        [6, 4],
        [7, 0],
        [0, 5]
    ])
);
