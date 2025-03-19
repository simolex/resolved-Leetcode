/**
 * 319. Bulb Switcher
 *
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    let result = Array(n).fill(0);

    for (let j = 3; j <= n; j++) {
        for (let k = j - 1; k < n; k += j) {
            result[k] = 1 - result[k];
        }
    }

    let blink = 1;
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += blink ^ result[i];

        blink = 1 - blink;
    }
    return count;
};

// Version #2
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch(0));

console.log(bulbSwitch(1));
console.log(bulbSwitch(2));
console.log(bulbSwitch(3));

console.log(bulbSwitch(4));
console.log(bulbSwitch(5));
console.log(bulbSwitch(6));
console.log(bulbSwitch(7));
console.log(bulbSwitch(8));

console.log(bulbSwitch(9));
console.log(bulbSwitch(10));
console.log(bulbSwitch(11));
console.log(bulbSwitch(12));
console.log(bulbSwitch(13));
console.log(bulbSwitch(14));
console.log(bulbSwitch(15));

console.log(bulbSwitch(16));
console.log(bulbSwitch(17));
console.log(bulbSwitch(18));
console.log(bulbSwitch(19));
console.log(bulbSwitch(20));
