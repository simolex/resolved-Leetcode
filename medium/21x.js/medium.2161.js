/**
 * 2161. Partition Array According to Given Pivot
 *
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const greaterStack = [];
    let equalPivot = 0;

    let lastValue = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            nums[lastValue] = nums[i];
            lastValue++;
        } else if (nums[i] === pivot) {
            equalPivot++;
        } else {
            greaterStack.push(nums[i]);
        }
    }

    for (let z = 0; z < equalPivot; z++) {
        nums[lastValue++] = pivot;
    }

    for (let j = 0; j < greaterStack.length; j++) {
        nums[lastValue++] = greaterStack[j];
    }

    return nums;
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
