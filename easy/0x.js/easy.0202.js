/**
 * 202. Happy Number
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const prevSteps = new Set();
    const squares = Array.from({ length: 10 }, (_, i) => i * i);

    while (n !== 0) {
        if (prevSteps.has(n)) {
            return false;
        }
        prevSteps.add(n);

        let sum = 0;
        while (n > 0) {
            sum += squares[n % 10];
            n = Math.floor(n / 10);
        }

        if (sum === 1) {
            return true;
        }
        n = sum;
    }
    return false;
};

console.log(isHappy(19));
console.log(isHappy(2));
