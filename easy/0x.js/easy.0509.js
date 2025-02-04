/**
 * 509. Fibonacci Number
 *
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const steps = [0, 1];

    for (let i = 2; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n];
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
