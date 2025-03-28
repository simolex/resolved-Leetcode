/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const nums = Array.from({ length: n }, (_, i) => i + 1);

    let left, right;

    for (let i = 1; i < k; i++) {
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
    return nums.join("");
};

var getPermutation = function (n, k) {
    const fact = [1];
    const nums = Array.from({ length: n }, (_, i) => {
        if (i > 0) fact.push(fact[i - 1] * i);
        return i + 1;
    });
    const result = [];

    k = k - 1;
    let index;
    for (let i = n - 1; i >= 0; i--) {
        index = Math.floor(k / fact[i]);
        result[n - i - 1] = nums.splice(index, 1);
        k %= fact[i];
    }

    return result.join("");
};

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 1));
