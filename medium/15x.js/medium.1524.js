/**
 * 1524. Number of Sub-arrays With Odd Sum
 *
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    let result = 0;
    let oddCount = 0;
    let evenCount = 1;
    let prefixSum = 0;
    const mod = 10 ** 9 + 7;

    for (const n of arr) {
        prefixSum += n;

        if (prefixSum % 2 === 1) {
            result = (result + evenCount) % mod;
            oddCount++;
        } else {
            result = (result + oddCount) % mod;
            evenCount++;
        }
    }

    return result;
};

console.log(numOfSubarrays([1, 3, 5]));
console.log(numOfSubarrays([2, 4, 6]));

console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7]));
