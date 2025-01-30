/**
 * 2493. Divide Nodes Into the Maximum Number of Groups
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function (n, edges) {
    let e = edges.length;
    const graph = Array.from({ length: n }, () => []);
    let markVertex = Array(n).fill(-1);
    let vertex_1, vertex_2;
    for (let i = 0; i < e; i++) {
        [vertex_1, vertex_2] = edges[i];

        graph[vertex_1 - 1].push(vertex_2 - 1);
        graph[vertex_2 - 1].push(vertex_1 - 1);
    }

    let currentVertex;
    let currentGroup = 1;
    let maxGroup = 0;
    let pntQueue = 0;
    const queue = [];
    let components = [];

    for (let i = 0; i < n; i++) {
        if (markVertex[i] < 0) {
            const newComponent = [];
            queue.push(i);
            while (queue.length > 0) {
                currentVertex = queue.pop();
                markVertex[currentVertex] = 1;
                newComponent.push(currentVertex);

                for (let neig of graph[currentVertex]) {
                    if (markVertex[neig] < 0) {
                        queue.push(neig);
                    }
                }
            }
            components.push(newComponent);
        }
    }

    for (let component of components) {
        let currentMaxGroup = 0;
        for (let start of component) {
            markVertex.fill(-1);
            queue.push(1, start);
            markVertex[start] = 1;

            while (queue.length > pntQueue) {
                currentGroup = queue[pntQueue++];
                currentVertex = queue[pntQueue++];

                currentMaxGroup = Math.max(currentMaxGroup, currentGroup);

                for (let neig of graph[currentVertex]) {
                    if (
                        markVertex[neig] > 0 &&
                        markVertex[currentVertex] % 2 === markVertex[neig] % 2
                    ) {
                        return -1;
                    } else if (markVertex[neig] < 0) {
                        markVertex[neig] = currentGroup + 1;
                        queue.push(currentGroup + 1, neig);
                    }
                }
            }
        }

        maxGroup += currentMaxGroup;
    }

    return maxGroup;
};

console.log(
    magnificentSets(6, [
        [1, 2],
        [1, 4],
        [1, 5],
        [2, 6],
        [2, 3],
        [4, 6],
    ])
);
console.log(
    magnificentSets(3, [
        [1, 2],
        [2, 3],
        [3, 1],
    ])
);

console.log(
    magnificentSets(26, [
        [9, 16],
        [8, 3],
        [20, 21],
        [12, 16],
        [14, 3],
        [7, 21],
        [22, 3],
        [22, 18],
        [11, 16],
        [25, 4],
        [2, 4],
        [14, 21],
        [23, 3],
        [17, 3],
        [2, 16],
        [24, 16],
        [13, 4],
        [10, 21],
        [7, 4],
        [9, 18],
        [14, 18],
        [14, 4],
        [14, 16],
        [1, 3],
        [25, 18],
        [17, 4],
        [1, 16],
        [23, 4],
        [2, 21],
        [5, 16],
        [24, 18],
        [20, 18],
        [19, 16],
        [24, 21],
        [9, 3],
        [24, 3],
        [19, 18],
        [25, 16],
        [19, 21],
        [6, 3],
        [26, 18],
        [5, 21],
        [20, 16],
        [2, 3],
        [10, 18],
        [26, 16],
        [8, 4],
        [11, 21],
        [23, 16],
        [13, 16],
        [25, 3],
        [7, 18],
        [19, 3],
        [20, 4],
        [26, 3],
        [23, 18],
        [15, 18],
        [17, 18],
        [10, 16],
        [26, 21],
        [23, 21],
        [7, 16],
        [8, 18],
        [10, 4],
        [24, 4],
        [7, 3],
        [11, 18],
        [9, 4],
        [26, 4],
        [13, 21],
        [22, 16],
        [22, 21],
        [20, 3],
        [6, 18],
        [9, 21],
        [10, 3],
        [22, 4],
        [1, 18],
        [25, 21],
        [11, 4],
        [1, 21],
        [15, 3],
        [1, 4],
        [15, 16],
        [2, 18],
        [13, 3],
        [8, 21],
        [13, 18],
        [11, 3],
        [15, 21],
        [8, 16],
        [17, 16],
        [15, 4],
        [12, 3],
        [6, 4],
        [17, 21],
        [5, 18],
        [6, 16],
        [6, 21],
        [12, 4],
        [19, 4],
        [5, 3],
        [12, 21],
        [5, 4],
    ])
);

console.log(
    magnificentSets(92, [
        [67, 29],
        [13, 29],
        [77, 29],
        [36, 29],
        [82, 29],
        [54, 29],
        [57, 29],
        [53, 29],
        [68, 29],
        [26, 29],
        [21, 29],
        [46, 29],
        [41, 29],
        [45, 29],
        [56, 29],
        [88, 29],
        [2, 29],
        [7, 29],
        [5, 29],
        [16, 29],
        [37, 29],
        [50, 29],
        [79, 29],
        [91, 29],
        [48, 29],
        [87, 29],
        [25, 29],
        [80, 29],
        [71, 29],
        [9, 29],
        [78, 29],
        [33, 29],
        [4, 29],
        [44, 29],
        [72, 29],
        [65, 29],
        [61, 29],
    ])
);
