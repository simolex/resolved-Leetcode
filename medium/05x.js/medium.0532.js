/**
 * 532. K-diff Pairs in an Array
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    const freqNum = new Map();
    for (let num of nums) {
        freqNum.set(num, -~freqNum.get(num));
    }

    const uniquePairs = new Set();
    for (let num of nums) {
        if (k > 0) {
            if (freqNum.has(num + k)) {
                uniquePairs.add(JSON.stringify(num + k > num ? [num, num + k] : [num + k, num]));
            }
        } else {
            if (freqNum.get(num) > 1) {
                uniquePairs.add(JSON.stringify([num, num]));
            }
        }
    }
    return uniquePairs.size;
};

var findPairs = function (nums, k) {
    const freqNum = new Map();
    for (let num of nums) {
        freqNum.set(num, -~freqNum.get(num));
    }

    const uniquePairs = new Set();

    freqNum.forEach((count, num) => {
        if (k > 0) {
            if (freqNum.has(num + k)) {
                uniquePairs.add(JSON.stringify(num + k > num ? [num, num + k] : [num + k, num]));
            }
        } else {
            if (count > 1) {
                uniquePairs.add(JSON.stringify([num, num]));
            }
        }
    });

    return uniquePairs.size;
};

console.log(findPairs([3, 1, 4, 1, 5], 2));
console.log(findPairs([1, 2, 3, 4, 5], 1));
console.log(findPairs([1, 3, 1, 5, 4], 0));
