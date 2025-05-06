/**
 * 1920. Build Array from Permutation
 */
function buildArray(nums: number[]): number[] {
    return nums.map((v) => nums[v]);
}
console.log(buildArray([0, 2, 1, 5, 3, 4]));
console.log(buildArray([5, 0, 1, 2, 3, 4]));
