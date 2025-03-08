/**
 * 2379. Minimum Recolors to Get K Consecutive Black Blocks
 *
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let n = blocks.length;
    let result = Infinity;

    let whiteCount = 0;
    for (let i = 0; i < n; i++) {
        if (blocks[i] === "W") whiteCount++;
        if (i >= k && blocks[i - k] === "W") whiteCount--;
        if (i >= k - 1) {
            result = Math.min(result, whiteCount);
        }
    }

    return result;
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
console.log(minimumRecolors("WBWBBBW", 2));
