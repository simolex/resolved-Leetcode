/**
 * 1925. Count Square Sum Triples
 *
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    const squares = Array.from({ length: n + 1 }, (_, i) => i * i);
    const mapCircles = new Set(squares);
    let count = 0;

    let sum;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            sum = squares[i] + squares[j];
            if (mapCircles.has(sum)) count++;
        }
    }

    return count * 2;
};

console.log(countTriples(5));
console.log(countTriples(10));
