/**
 * 78. Subsets
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let n = nums.length;
    let k = 2 ** n;
    const result = [];

    let mask, element, j;
    for (let i = 0; i < k; i++) {
        mask = i;
        element = [];
        j = 0;
        while (mask > 0) {
            if (mask & 1) {
                element.push(nums[j]);
            }
            j++;
            mask = mask >>> 1;
        }
        result.push([...element]);
    }
    return result;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
