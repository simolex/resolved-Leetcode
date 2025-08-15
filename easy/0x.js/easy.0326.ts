var isPowerOfThree = (n: number): boolean => {
    let low = 0;
    let high = Number.MAX_SAFE_INTEGER;
    let mid;

    const fastPow = (base: number, exponent: number) => {
        let result = 1;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result *= base;
            }
            exponent = exponent >> 1;
            base *= base;
        }
        return result;
    }

    while (low < high) {
        mid = low + Math.floor((high - low) / 2);

        if (fastPow(3, mid) < n) {
            low = mid + 1
        } else {
            high = mid;
        }
    }

    return fastPow(3, low) === n;

};



var isPowerOfThree = (n: number): boolean => {
    if (n <= 0) return false;



    const powers = [1, 3, 9, 81, 6561, 43046721, 1853020188851841];

    for (let baseIndex = 6; baseIndex > 0; baseIndex--) {
        if (n % powers[baseIndex] === 0) {
            n /= powers[baseIndex]
        }
    }

    return n === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
