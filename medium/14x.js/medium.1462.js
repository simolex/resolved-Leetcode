/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    const answer = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

    const graph = new Map();
    const nextable = Array.from({ length: numCourses }, (_, i) => i);

    for (let [prev, next] of prerequisites) {
        if (!graph.has(prev)) {
            graph.set(prev, new Set());
        }
        graph.get(prev).add(next);
        nextable[next] = -1;
    }

    const firstable = nextable.filter((v) => v >= 0);

    console.log(graph, firstable);
};

console.log(
    checkIfPrerequisite(
        3,
        [
            [1, 2],
            [1, 0],
            [2, 0],
        ],
        [
            [1, 0],
            [1, 2],
        ]
    )
);
