/**
 * 2300. Successful Pairs of Spells and Potions
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    let n = potions.length;
    potions.sort((a, b) => a - b);

    return spells.map((spell) => {
        let l = 0;
        let r = n;
        let m;

        while (l < r) {
            m = (l + r) >> 1;
            if (spell * potions[m] < success) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return l < n ? n - l : 0;
    });
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
