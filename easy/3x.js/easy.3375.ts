/**
 * 3375. Minimum Operations to Make Array Values Equal to K
 */
var minOperations = (nums: number[], k: number): number => {
    const set = new Set();
    for (const num of nums) {
        if (num < k) {
            return -1;
        } else if (num > k) {
            set.add(num);
        }
    }
    return set.size;
};

console.log(minOperations([5, 2, 5, 4, 5], 2));
console.log(minOperations([2, 1, 2], 2));
console.log(minOperations([9, 7, 5, 3], 1));
