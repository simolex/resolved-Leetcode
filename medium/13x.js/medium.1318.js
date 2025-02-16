/**
 * 1318. Minimum Flips to Make a OR b Equal to c
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let changes = 0;
    while ((a | b | c) > 0) {
        if ((c & 1) === 0) {
            changes += (a & 1) + (b & 1);
        } else if (((a & 1) | (b & 1)) === 0) {
            changes++;
        }
        a >>>= 1;
        b >>>= 1;
        c >>>= 1;
    }
    return changes;
};

console.log(minFlips(2, 6, 5));
console.log(minFlips(4, 2, 7));
console.log(minFlips(1, 2, 3));
