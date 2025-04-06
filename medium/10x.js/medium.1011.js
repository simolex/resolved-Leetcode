/**
 * 1011. Capacity To Ship Packages Within D Days
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    const splitable = (limit) => {
        let sum = 0;
        let count = 1;
        for (let weight of weights) {
            if (sum + weight > limit) {
                sum = 0;
                count++;
            }
            sum += weight;
        }
        return count;
    };

    let l = Math.max(...weights);
    let r = 10 ** 9;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (splitable(m) > days) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
