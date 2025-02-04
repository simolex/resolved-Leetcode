/**
 * 1137. N-th Tribonacci Number
 *
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    const steps = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2] + steps[i - 3];
    }
    return steps[n];
};

console.log(tribonacci(4));
console.log(tribonacci(25));
