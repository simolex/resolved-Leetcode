/**
 * 2523. Closest Prime Numbers in Range
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const n = 10 ** 6;
const isPrime = new Int8Array(n + 1).fill(1);
isPrime[0] = isPrime[1] = 0;

for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (isPrime[i] !== 0) {
        for (let k = i * i; k < n; k += i) {
            isPrime[k] = 0;
        }
    }
}

const primes = [];
for (let p = n; p >= 2; p--) {
    if (isPrime[p] === 1) {
        primes.push(p);
    }
}

var closestPrimes = function (left, right) {
    let distance = Infinity;
    let stack = [];
    let pntResult = 0;

    // Оптимизация чтобы быстрее начать сравнивать
    let start = 0;
    let stop = primes.length - 1;
    let current;
    while (start < stop) {
        current = start + Math.floor(stop - start);
        if (primes[current] > right) {
            start = current;
        } else {
            stop = current - 1;
        }
    }
    let p = start;

    // Сравнение простых пар
    while (primes[p] >= left) {
        if (primes[p] <= right) {
            if (stack.length > 0 && stack[stack.length - 1] - primes[p] <= distance) {
                distance = stack[stack.length - 1] - primes[p];
                pntResult = stack.length - 1;
            }
            stack.push(primes[p]);
        }
        p++;
    }

    return stack.length > 1 ? stack.slice(pntResult, pntResult + 2).reverse() : [-1, -1];
};

console.log(closestPrimes(10, 19));
console.log(closestPrimes(4, 6));
