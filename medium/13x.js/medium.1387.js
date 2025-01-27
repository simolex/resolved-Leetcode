/**
 * 1387. Sort Integers by The Power Value
 *
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
let getPower = function (n) {
    let power = 0;
    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
        power++;
    }
    return power;
};

var getKth = function (lo, hi, k) {
    const list = [];
    for (let i = lo; i <= hi; i++) {
        list.push({ power: getPower(i), val: i });
    }
    list.sort((a, b) => a.power - b.power);

    return list[k - 1].val;
};

console.log(getKth(12, 15, 2));
console.log(getKth(7, 11, 4));
