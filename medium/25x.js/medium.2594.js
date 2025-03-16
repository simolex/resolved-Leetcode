/**
 * 2594. Minimum Time to Repair Cars
 *
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let n = ranks.length;
    let l = 1;
    let r = Math.max(...ranks) * cars * cars;
    let m;

    const countCars = (time) => {
        let count = 0;
        for (let i = 0; i < n; i++) {
            count += Math.floor(Math.sqrt(time / ranks[i]));
        }
        return count;
    };

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (countCars(m) < cars) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

console.log(repairCars([4, 2, 3, 1], 10));
console.log(repairCars([5, 1, 8], 6));
