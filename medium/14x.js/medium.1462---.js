/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    const graph = new Map();
    const answer = new Map();
    const nextable = Array(numCourses).fill(0);

    for (let [prev, next] of prerequisites) {
        if (!graph.has(prev)) {
            graph.set(prev, new Set());
        }
        graph.get(prev).add(next);
        nextable[next]++;
    }

    let current;
    const starts = nextable.map((v, i) => (v === 0 ? i : -1)).filter((v) => v >= 0);

    for (let start of starts) {
        let pntQueue = 0;
        let queue = [start];
        const accessable = new Map();
        const cloneNextable = [...nextable];
        while (queue.length > pntQueue) {
            current = queue[pntQueue++];

            if (!accessable.has(current)) {
                accessable.set(current, new Set());
            }
            if (graph.has(current)) {
                graph.get(current).forEach((v) => {
                    accessable.forEach((from) => from.add(v));
                    cloneNextable[v]--;
                    // if (cloneNextable[v] === 0) {
                        queue.push(v);
                    // }
                });
            }
        }
        accessable.forEach((toSet, from) => {
            if (!answer.has(from)) {
                answer.set(from, new Set());
            }
            toSet.forEach((to) => answer.get(from).add(to));
        });
    }

    return queries.map(([prev, next]) => answer.has(prev) && answer.get(prev).has(next));
};

console.log(
    checkIfPrerequisite(
        2,
        [[1, 0]],
        [
            [0, 1],
            [1, 0]
        ]
    )
);

console.log(
    checkIfPrerequisite(
        2,
        [],
        [
            [1, 0],
            [0, 1]
        ]
    )
);

console.log(
    checkIfPrerequisite(
        3,
        [
            [1, 2],
            [1, 0],
            [2, 0]
        ],
        [
            [1, 0],
            [1, 2]
        ]
    )
);

console.log(
    checkIfPrerequisite(
        10,
        [
            [3, 9],
            [3, 2],
            [3, 7],
            [9, 5],
            [9, 0],
            [9, 6],
            [8, 0],
            [8, 1],
            [8, 7],
            [5, 0],
            [5, 2],
            [5, 1],
            [5, 7],
            [5, 6],
            [0, 2],
            [0, 1],
            [0, 6],
            [2, 1],
            [2, 6],
            [4, 1],
            [1, 7],
            [1, 6],
            [7, 6]
        ],
        [
            [9, 7],
            [7, 3],
            [6, 1],
            [1, 8],
            [5, 7],
            [3, 8],
            [2, 5],
            [7, 9],
            [3, 0],
            [4, 8],
            [5, 1],
            [5, 3],
            [3, 0],
            [9, 8],
            [6, 9],
            [5, 0],
            [8, 2],
            [3, 6],
            [3, 6],
            [1, 0],
            [9, 7],
            [9, 5],
            [1, 9],
            [0, 4],
            [7, 3],
            [9, 8],
            [6, 2],
            [7, 9],
            [8, 9],
            [0, 5],
            [5, 8],
            [9, 8],
            [5, 6],
            [7, 6],
            [7, 3],
            [2, 1],
            [9, 8],
            [8, 2],
            [7, 8],
            [9, 8],
            [0, 1],
            [8, 9],
            [8, 9],
            [6, 1],
            [8, 1],
            [8, 6],
            [3, 8],
            [8, 9],
            [9, 7],
            [8, 7],
            [3, 7],
            [9, 7],
            [9, 6],
            [4, 2],
            [5, 9],
            [3, 0],
            [6, 9],
            [7, 8],
            [6, 9],
            [2, 1],
            [7, 3],
            [0, 5],
            [4, 9],
            [5, 6],
            [8, 7],
            [9, 7],
            [9, 3],
            [1, 0],
            [1, 7],
            [7, 9],
            [1, 5]
        ]
    )
);
