/**
 * 1359. Count All Valid Pickup and Delivery Options
 *
 * @param {number} n
 * @return {number}
 */
var countOrders = function (n) {
    if (n == 1) return 1;

    let result = 1;
    const mod = 10 ** 9 + 7;
    const options = 2 * n;
    let visited = 0;
    let current;

    for (let i = options; i > 1; i--) {
        current = i;
        while (visited < n && (current & 1) == 0) {
            current = current >>> 1;
            visited++;
        }
        result = (result * current) % mod;
    }
    return result;
};

console.log(countOrders(1));
console.log(countOrders(2));
console.log(countOrders(3));
console.log(countOrders(4));
console.log(countOrders(500));
