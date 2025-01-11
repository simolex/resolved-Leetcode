/**
 * 547. Number of Provinces
 *
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let count = 0;
    let currentCity;

    const n = isConnected.length;
    const visited = Array(n).fill(false);
    const stack = [];

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            stack.push(i);
            while (stack.length > 0) {
                currentCity = stack.pop();
                visited[currentCity] = true;
                for (let j = 0; j < n; j++) {
                    if (!!isConnected[currentCity][j] && !visited[i]) stack.push(i);
                }
            }
        }
    }

    return count;
};

console.log(
    findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]
    ])
);
console.log(
    findCircleNum([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ])
);
