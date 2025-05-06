/**
 *  35. Search Insert Position
 */
function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length;
    let m;

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
