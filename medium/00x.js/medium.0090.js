/**
 * 90. Subsets II
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let n = nums.length;
    let k = 2 ** n;
    const map = new Set();
    const result = [];
    nums.sort((a, b) => a - b);

    let mask, element, j, hash;
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
        hash = element.join();
        if (!map.has(hash)) {
            result.push([...element]);
            map.add(hash);
        }
    }
    return result;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([0]));
