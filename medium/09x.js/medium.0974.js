/**
 * 974. Subarray Sums Divisible by K
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let n = nums.length;
    let freqSums = new Map();

    let prefix = Array(n + 1);
    prefix[0] = 0;

    let sum;

    for (let i = 0; i < n; i++) {
        sum = (prefix[i] + nums[i]) % k;

        prefix[i + 1] = sum;
    }

    let count = 0;
    for (let i = n; i >= 0; i--) {
        count += freqSums.get(prefix[i]) || 0;

        if (k > 0) {
            count += freqSums.get(prefix[i] - k) || 0;
            count += freqSums.get(prefix[i] + k) || 0;
        }
        freqSums.set(prefix[i], -~freqSums.get(prefix[i]));
    }

    return count;
};

var subarraysDivByK = function (nums, k) {
    let n = nums.length;
    let freqSums = new Map();
    freqSums.set(0, 1);

    let prefix;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        prefix = sum % k;
        if (prefix < 0) {
            prefix += k;
        }
        count += freqSums.get(prefix) || 0;

        freqSums.set(prefix, -~freqSums.get(prefix));
    }

    return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([5], 9));
