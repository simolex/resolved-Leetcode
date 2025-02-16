/**
 * 2220. Minimum Bit Flips to Convert Number
 *
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let flips = 0;

    while ((start | goal) !== 0) {
        flips += (start & 1) ^ (goal & 1);
        start >>= 1;
        goal >>= 1;
    }
    return flips;
};

// Version #2
var minBitFlips = function (start, goal) {
    let compare = start ^ goal;
    let flips = 0;

    while (compare) {
        flips += compare & 1;
        compare >>= 1;
    }
    return flips;
};

console.log(minBitFlips(10, 7));
console.log(minBitFlips(3, 4));
console.log(minBitFlips(3, 1));
