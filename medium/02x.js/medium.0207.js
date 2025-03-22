/**
 * 207. Course Schedule
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = new Map();
    const visited = Array(numCourses).fill(-1);

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
                                return false;
                            }
                            if (visited[next] < 0) {
                                stack.push(next);
                            }
                        }
                    }
                } else {
                    visited[current] = 1;
                }
            }
        }
    }
    return true;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
    canFinish(2, [
        [1, 0],
        [0, 1]
    ])
);
