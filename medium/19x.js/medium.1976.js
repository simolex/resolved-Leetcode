/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
    // Initialize the dp table
    const MOD = 1_000_000_007;
    let dp = new Array(n);
    for (let src = 0; src < n; src++) {
        dp[src] = new Array(n);
        for (let dest = 0; dest < n; dest++) {
            dp[src][dest] = new Array(2);
            if (src !== dest) {
                // Set a large initial time
                dp[src][dest][0] = 1e12;
                // No paths yet
                dp[src][dest][1] = 0;
            } else {
                // Distance from a node to itself is 0
                dp[src][dest][0] = 0;
                // Only one trivial way (staying at the node)
                dp[src][dest][1] = 1;
            }
        }
    }

    // Initialize direct roads from the input
    for (let road of roads) {
        let startNode = road[0],
            endNode = road[1],
            travelTime = road[2];
        dp[startNode][endNode][0] = travelTime;
        dp[endNode][startNode][0] = travelTime;
        // There is one direct path
        dp[startNode][endNode][1] = 1;
        // Since the roads are bidirectional
        dp[endNode][startNode][1] = 1;
    }

    // Apply the Floyd-Warshall algorithm to compute shortest paths
    // Intermediate node
    for (let mid = 0; mid < n; mid++) {
        // Starting node
        for (let src = 0; src < n; src++) {
            // Destination node
            for (let dest = 0; dest < n; dest++) {
                // Avoid self-loops
                if (src !== mid && dest !== mid) {
                    let newTime = dp[src][mid][0] + dp[mid][dest][0];

                    if (newTime < dp[src][dest][0]) {
                        // Found a shorter path
                        dp[src][dest][0] = newTime;
                        dp[src][dest][1] = (dp[src][mid][1] * dp[mid][dest][1]) % MOD;
                    } else if (newTime === dp[src][dest][0]) {
                        // Another way to achieve the same shortest time
                        dp[src][dest][1] = (dp[src][dest][1] + dp[src][mid][1] * dp[mid][dest][1]) % MOD;
                    }
                }
            }
        }
    }

    // Return the number of shortest paths from node (n-1) to node 0
    return dp[n - 1][0][1];
};

console.log(
    countPaths(7, [
        [0, 6, 7],
        [0, 1, 2],
        [1, 2, 3],
        [1, 3, 3],
        [6, 3, 3],
        [3, 5, 1],
        [6, 5, 1],
        [2, 5, 1],
        [0, 4, 5],
        [4, 6, 2]
    ])
);

console.log(countPaths(2, [[1, 0, 10]]));
