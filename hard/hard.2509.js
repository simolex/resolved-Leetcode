/**
 * 2509. Cycle Length Queries in a Tree
 *
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function (n, queries) {
    return queries.map(([u, v]) => {
        const hu = Math.floor(Math.log2(u));
        const hv = Math.floor(Math.log2(v));
        return hu + 1 + hv - 2 * Math.floor(Math.log2(lowestCommonAncestor(u, v, hu, hv)));
    });
};

function lowestCommonAncestor(p, q, hp, hq) {
    while (hp > hq) {
        p = p >>> 1;
        hq++;
    }

    while (hq > hp) {
        q = q >>> 1;
        hp++;
    }

    while (p != q) {
        p = p >>> 1;
        q = q >>> 1;
    }
    return p;
}

console.log(
    cycleLengthQueries(5, [
        [17, 21],
        [23, 5],
        [15, 7],
        [3, 21],
        [31, 9],
        [5, 15],
        [11, 2],
        [19, 7]
    ])
);
