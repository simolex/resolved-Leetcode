/**
 * 494. Target Sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const n = nums.length;
    const range = 2 ** n;
    let mask, sum;
    let count = 0;
    for (let i = 0; i < range; i++) {
        sum = 0;
        mask = i;
        for (let j = 0; j < n; j++) {
            sum += ((mask & 1) * 2 - 1) * nums[j];
            mask = mask >>> 1;
        }
        if (sum === target) {
            count++;
        }
    }
    return count;
};
// Пока не работает. Нужен дебаг
var findTargetSumWays = function (nums, target) {
    const positive = nums.reduce((sum, v) => sum + v, 0);
    const negative = nums.reduce((sum, v) => sum - v, 0);

    let n = nums.length;
    let count = 0;
    let times = 0;
    let counted = new Set();
    const step = function (current, sum, rangeLeft, rangeRigth, mask) {
        console.log(">", current, sum, mask, nums[current - 1], counted);
        if (current > 0 && !counted.has(mask) && sum === target) {
            if (nums[current - 1] > 0) {
                count++;
            } else {
                times++;
            }
            counted.add(mask);
        }
        if (current === n) return;

        // console.log("<<<", rangeLeft, rangeRigth - nums[current] * 2);
        if (
            target >= rangeLeft &&
            target <= rangeRigth - nums[current] * 2 &&
            !counted.has(mask & ~(1 << current))
        ) {
            step(
                current + 1,
                sum - nums[current] * 2,
                rangeLeft,
                rangeRigth - nums[current] * 2,
                mask & ~(1 << current)
            );
        }
        // console.log(">>>", rangeLeft + nums[current] * 2, rangeRigth);

        if (
            target >= rangeLeft + nums[current] * 2 &&
            target <= rangeRigth &&
            !counted.has(mask) &&
            nums[current] > 0
        ) {
            step(current + 1, sum, rangeLeft + nums[current] * 2, rangeRigth, mask);
        }
    };
    step(0, positive, negative, positive, 2 ** n - 1);
    console.log(count, times);
    return count * (times ? 2 ** times : 1);
};

// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
// console.log(findTargetSumWays([1], 1));
// console.log(findTargetSumWays([1, 0], 1));
console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
