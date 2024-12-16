/**
 * 483. Smallest Good Base
 *
 * @param {string} n
 * @return {string}
 */

var smallestGoodBase = function (n) {
    const N = BigInt(n);

    const m_max = Math.floor(Math.log2(Number(N)));

    for (let m = m_max; m > 1; m--) {
        let k = BigInt(Math.floor(Math.pow(Number(N), 1 / m)));
        let sum = BigInt(1);
        let cur = BigInt(1);

        for (let i = 1; i <= m; i++) {
            cur *= k;
            sum += cur;
        }

        if (sum === N) return k.toString();
    }
    return (N - BigInt(1)).toString();
};

console.log(smallestGoodBase("13"));
console.log(smallestGoodBase("4681"));
console.log(smallestGoodBase("1000000000000000000"));
