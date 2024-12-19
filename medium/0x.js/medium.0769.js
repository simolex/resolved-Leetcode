/**
 * 769. Max Chunks To Make Sorted
 *
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let max = -1;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        max = max < 0 ? arr[0] : Math.max(max, arr[i]);

        if (max === i) {
            count++;
        }
    }
    return count;
};

console.log(maxChunksToSorted([4, 3, 2, 1, 0]));
console.log(maxChunksToSorted([1, 0, 2, 3, 4]));
