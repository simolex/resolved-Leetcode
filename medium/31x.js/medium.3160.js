/**
 * 3160. Find the Number of Distinct Colors Among the Balls
 *
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
    const colors = new Map();
    const balls = new Map();

    let prevColor;
    return queries.map(([ball, color]) => {
        if (balls.has(ball)) {
            prevColor = balls.get(ball);

            colors.set(prevColor, colors.get(prevColor) - 1);
            if (colors.get(prevColor) === 0) colors.delete(prevColor);
        }

        balls.set(ball, color);
        colors.set(color, -~colors.get(color));

        return colors.size;
    });
};

console.log(
    queryResults(4, [
        [1, 4],
        [2, 5],
        [1, 3],
        [3, 4],
    ])
);
console.log(
    queryResults(4, [
        [0, 1],
        [1, 2],
        [2, 2],
        [3, 4],
        [4, 5],
    ])
);
