/**
 * 1863. Sum of All Subset XOR Totals
 *
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let n = nums.length;
    let allSums = [0];
    let sum = 0;
    let xor;
    for (let i = 0; i < n; i++) {
        m = 1 << i;
        for (let j = 0; j < m; j++) {
            xor = allSums[j] ^ nums[i];
            sum += xor;
            allSums.push(xor);
        }
    }
    return sum;
};

var subsetXORSum = function (nums) {
    let n = nums.length;
    let sum = 0;
    for (let num of nums) {
        sum |= num;
    }
    return sum << (n - 1);
};

console.log(subsetXORSum([1, 3]));
console.log(subsetXORSum([5, 1, 6]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
