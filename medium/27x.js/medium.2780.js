/**
 * 2780. Minimum Index of a Valid Split
 *
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
    let dominant;
    let dominantCount = 0;
    const freq = new Map();
    for (let num of nums) {
        freq.set(num, -~freq.get(num));
        if (freq.get(num) > dominantCount) {
            dominantCount = freq.get(num);
            dominant = num;
        }
    }

    let leftDominant = 0;
    let leftNoDominant = 0;
    let rightDominant = dominantCount;
    let rightNoDominant = nums.length - dominantCount;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === dominant) {
            leftDominant++;
            rightDominant--;
        } else {
            leftNoDominant++;
            rightNoDominant--;
        }

        if (leftDominant > leftNoDominant && rightDominant > rightNoDominant) {
            return i;
        }
    }
    return -1;
};

console.log(minimumIndex([1, 2, 2, 2]));
console.log(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1]));
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2]));
