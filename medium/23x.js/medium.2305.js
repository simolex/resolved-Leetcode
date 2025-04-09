/**
 * 2305. Fair Distribution of Cookies
 *
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    let n = cookies.length;
    const children = Array(k).fill(0);
    let unfairness = Infinity;

    const distribute = (indexBag = 0) => {
        if (indexBag >= n) {
            max = Math.max(...children);
            unfairness = Math.min(unfairness, max);
            return;
        }

        for (let c = 0; c < k; c++) {
            children[c] += cookies[indexBag];
            if (children[c] < unfairness) distribute(1 + indexBag);
            children[c] -= cookies[indexBag];

            if (children[c] === 0) break;
        }
    };
    distribute();
    return unfairness;
};

console.log(distributeCookies([8, 15, 10, 20, 8], 2));
console.log(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3));
