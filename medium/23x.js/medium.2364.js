/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let n = nums.length;
    let offsetMap = nums.reduce((map, num, idx) => {
        let offset = num - idx;
        !map.has(offset) && map.set(offset, []);
        map.get(offset).push(idx);
        return map;
    }, new Map());

    let count = 0;
    let countPairs;
    offsetMap.forEach((pairs) => {
        countPairs = pairs.length;
        if (countPairs > 1) {
            count += (countPairs * (countPairs - 1)) / 2;
        }
    });

    return (n * (n - 1)) / 2 - count;
};

var countBadPairs = function (nums) {
    let n = nums.length;
    let offsetMap = new Map();

    let offset;
    let count = 0;
    for (let i = 0; i < n; i++) {
        offset = nums[i] - i;
        count += offsetMap.has(offset) ? offsetMap.get(offset) : 0;
        offsetMap.set(offset, -~offsetMap.get(offset));
    }

    return (n * (n - 1)) / 2 - count;
};

console.log(countBadPairs([4, 1, 3, 3]));
console.log(countBadPairs([1, 2, 3, 4, 5]));
