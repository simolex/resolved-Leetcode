/**
 * 1732. Find the Highest Altitude
 *
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = 0;
    let current = 0;

    for (let altitude of gain) {
        current += altitude;
        max = Math.max(max, current);
    }

    return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
