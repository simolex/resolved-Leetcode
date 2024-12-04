/**
 * 229. Majority Element II
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);

    const n1 = nums[Math.floor(nums.length / 3)];
    const n2 = nums[Math.floor((nums.length * 2) / 3)];
    const third = Math.floor(nums.length / 3);

    let cnt_1 = 0;
    let cnt_2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (n1 == nums[i]) {
            cnt_1++;
        } else if (n2 == nums[i]) {
            cnt_2++;
        }
    }
    const result = [];

    if (cnt_1 > third) {
        result.push(n1);
    }
    if (cnt_2 > third) {
        result.push(n2);
    }
    return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
console.log(majorityElement([1, 2, 2, 3, 4, 4, 5]));
