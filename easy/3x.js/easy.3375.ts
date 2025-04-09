/**
 * 3375. Minimum Operations to Make Array Values Equal to K
 */
var minOperations = (nums: number[], k: number): number => {
    let count = 0;
    const exists = new Int8Array(128);

    for (let num of nums) {
        exists[num] = 1
    }
    exists[k] = 1

    for (let i = 127; i >= k; i--) {
        if (exists[i] == 1) {
            count++
        }

    }

    return count <= 1 ? -1 : count - 1;
};

console.log(minOperations([5, 2, 5, 4, 5], 2));
console.log(minOperations([2, 1, 2], 2));
console.log(minOperations([9, 7, 5, 3], 1));
