/**
 * 1780. Check if Number is a Sum of Powers of Three
 *
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    let currentPower = 1;

    while (currentPower < n) {
        currentPower *= 3;
    }

    while (currentPower > 0) {
        if (currentPower <= n) {
            n -= currentPower;
        }
        currentPower /= 3;
    }
    return n === 0;
};

var checkPowersOfThree = function (n) {
    const powersOfThree = [];
    let current = 1;

    while (current < n) {
        powersOfThree.push(current);
        current *= 3;
    }

    for (let p = powersOfThree.length - 1; p >= 0; p--) {
        if (powersOfThree[p] <= n) {
            n -= powersOfThree[p];
        }
    }
    return n === 0;
};

console.log(checkPowersOfThree(12));
console.log(checkPowersOfThree(91));
console.log(checkPowersOfThree(21));
