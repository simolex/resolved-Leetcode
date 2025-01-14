/**
 * 2657. Find the Prefix Common Array of Two Arrays
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const n = A.length;
    const patternA = Array(n).fill(false);
    const patternB = Array(n).fill(false);

    const countCompare = () => {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (patternA[i] && patternB[i]) {
                count++;
            }
        }
        return count;
    };

    const result = [];
    for (let i = 0; i < n; i++) {
        patternA[A[i] - 1] = true;
        patternB[B[i] - 1] = true;
        result.push(countCompare());
    }
    return result;
};

var findThePrefixCommonArray = function (A, B) {
    const n = A.length;
    const pattern = {};

    const result = [];
    let prefixSum = 0;
    for (let i = 0; i < n; i++) {
        pattern[A[i]] = -~pattern[A[i]];
        pattern[B[i]] = -~pattern[B[i]];

        if (A[i] === B[i]) {
            prefixSum++;
        } else {
            if (pattern[A[i]] > 1) {
                prefixSum++;
            }
            if (pattern[B[i]] > 1) {
                prefixSum++;
            }
        }

        result.push(prefixSum);
    }
    return result;
};

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
