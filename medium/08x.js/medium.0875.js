/**
 * 875. Koko Eating Bananas
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    const hoursEating = (k) => piles.reduce((sum, pile) => sum + Math.ceil(pile / k), 0);
    let l = 0;
    let r = Math.max(...piles);
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (hoursEating(m) > h) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
