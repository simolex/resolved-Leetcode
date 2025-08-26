/**
 * 342. Power of Four
 */

var isPowerOfFour = (n: number): boolean => {
    if (n <= 0) return false;

    const powers = [1, 4, 16, 256, 65536, 4294967296];
    for (let baseIndex = powers.length - 1; baseIndex > 0; baseIndex--) {
        if (n % powers[baseIndex] === 0) {
            n /= powers[baseIndex]
        }
    }

    return n === 1;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));

