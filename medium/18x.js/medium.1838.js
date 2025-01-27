/**
 * 1838. Frequency of the Most Frequent Element
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);
    let prefix = nums.reduce(
        (prev, f) => {
            prev.push(prev[prev.length - 1] + f);
            return prev;
        },
        [0]
    );

    let right = 0;
    let maxCount = 0;
    for (let left = 0; left < nums.length; left++) {
        while (
            right < nums.length &&
            prefix[right + 1] - prefix[left] + k >= nums[right] * (right - left + 1)
        ) {
            right++;
        }

        maxCount = Math.max(maxCount, right - left);
    }
    return maxCount;
};

console.log(maxFrequency([1, 2, 4], 5));
console.log(maxFrequency([1, 4, 8, 13], 5));

console.log(
    maxFrequency(
        [
            9930, 9923, 9983, 9997, 9934, 9952, 9945, 9914, 9985, 9982, 9970, 9932, 9985, 9902,
            9975, 9990, 9922, 9990, 9994, 9937, 9996, 9964, 9943, 9963, 9911, 9925, 9935, 9945,
            9933, 9916, 9930, 9938, 10000, 9916, 9911, 9959, 9957, 9907, 9913, 9916, 9993, 9930,
            9975, 9924, 9988, 9923, 9910, 9925, 9977, 9981, 9927, 9930, 9927, 9925, 9923, 9904,
            9928, 9928, 9986, 9903, 9985, 9954, 9938, 9911, 9952, 9974, 9926, 9920, 9972, 9983,
            9973, 9917, 9995, 9973, 9977, 9947, 9936, 9975, 9954, 9932, 9964, 9972, 9935, 9946,
            9966,
        ],
        3056
    )
);
