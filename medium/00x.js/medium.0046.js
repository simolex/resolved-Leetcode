/**
 * 46. Permutations
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length;
    const count = Array(n)
        .fill()
        .reduce((f, _, i) => f * (i + 1), 1);
    const result = [];

    let left, right;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < count; i++) {
        result.push([...nums]);

        left = n - 2;
        while (left >= 0 && nums[left] >= nums[left + 1]) {
            left--;
        }

        right = n - 1;
        while (left >= 0 && nums[left] >= nums[right]) {
            right--;
        }

        [nums[left], nums[right]] = [nums[right], nums[left]];

        left++;
        right = n - 1;
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    return result;
};

var permute = function (nums) {
    let n = nums.length;
    const result = [];
    let mask = 0;
    let currentState = Array(n);

    const nextDigit = (index = 0) => {
        if (index === n) {
            result.push([...currentState]);
            return;
        }

        for (let bit = 1, i = 0; i < n; i++, bit <<= 1) {
            if (mask & bit) continue;
            mask |= bit;
            currentState[index] = nums[i];
            nextDigit(index + 1);
            mask &= ~bit;
        }
    };

    nextDigit();
    return result;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
