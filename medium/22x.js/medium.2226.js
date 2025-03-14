/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    let l = 0;
    let r = Math.max(...candies);
    let m;

    const canAllocate = (sizeSubPile) => {
        let count = 0;
        for (let pile of candies) {
            count += Math.floor(pile / sizeSubPile);
        }
        return k <= count;
    };

    while (l < r) {
        m = l + Math.ceil((r - l) / 2);
        if (canAllocate(m)) {
            l = m;
        } else {
            r = m - 1;
        }
    }

    return l;
};

console.log(maximumCandies([5, 8, 6], 3));
console.log(maximumCandies([2, 5], 11));
