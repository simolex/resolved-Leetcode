/**
 * 3208. Alternating Groups II
 *
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    let n = colors.length;
    let countEqualColorChanges = 0;
    let count = 0;

    for (let i = 1; i < n + k - 1; i++) {
        if (colors[i % n] === colors[(i - 1) % n]) {
            countEqualColorChanges++;
        }
        if (i >= k && colors[i - k + 1] === colors[i - k]) {
            countEqualColorChanges--;
        }

        if (i >= k - 1 && countEqualColorChanges === 0) {
            count++;
        }
    }
    return count;
};

var numberOfAlternatingGroups = function (colors, k) {
    let n = colors.length;
    colors.length += k - 1;
    for (let i = 0; i < k - 1; i++) colors[n + i] = colors[i];

    n = colors.length;

    let countAlternating = 1;
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (colors[i] !== colors[i - 1]) {
            countAlternating++;
        } else {
            countAlternating = 1;
        }

        if (countAlternating >= k) {
            count++;
        }
    }
    return count;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6));
console.log(numberOfAlternatingGroups([1, 1, 0, 1], 4));
console.log(numberOfAlternatingGroups([0, 1, 0, 1], 3));
