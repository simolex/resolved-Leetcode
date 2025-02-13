/**
 * 338. Counting Bits
 *
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    return Array.from({ length: n + 1 }, (_, v) => {
        let count = 0;
        while (v !== 0) {
            v &= v - 1;
            count++;
        }
        return count;
    });
};

var countBits = function (n) {
    const result = Array(n + 2);
    result[0] = 0;
    result[1] = 1;
    for (let i = 2; i < n + 1; i += 2) {
        result[i + 1] = (result[i] = result[i >> 1]) + 1;
    }
    result.pop();
    return result.slice(0, -1);
};

console.log(countBits(2));
console.log(countBits(5));
// console.log(countBits(10000));
