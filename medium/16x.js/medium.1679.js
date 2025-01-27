/**
 * 1679. Max Number of K-Sum Pairs
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let finding;

    while (nums[left] < k && left < right) {
        finding = k - nums[left];
        while (left < right && nums[right] > finding) {
            right--;
        }
        if (left < right && nums[right] === finding) {
            right--;
            count++;
        }
        left++;
    }
    return count;
};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));
console.log(maxOperations([3, 5, 1, 5], 2));
