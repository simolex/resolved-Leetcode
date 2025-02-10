/**
 * 46. Permutations
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length;
    const indecies = Array.from({ length: n }, (_, i) => i);
    const count = indecies.reduce((f, v) => f * (v + 1), 1);
    const result = [];
    let left, right;

    for (let i = 0; i < count; i++) {
        result.push([...nums]);

        left = n - 2;
        while (indecies[left] > indecies[left + 1] && left >= 0) {
            left--;
        }

        right = n - 1;
        while (indecies[right] < indecies[left] && left >= 0) {
            right--;
        }

        [nums[indecies[left]], nums[indecies[right]]] = [
            nums[indecies[right]],
            nums[indecies[left]],
        ];

        left++;
        right++;

        while (left < right) {
            [nums[indecies[left]], nums[indecies[right]]] = [
                nums[indecies[right]],
                nums[indecies[left]],
            ];
            left++;
            right--;
        }
    }
    console.log(result);
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
