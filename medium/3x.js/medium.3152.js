/**
 * 3152. Special Array II
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
    const prefix = [0];

    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix[i - 1] + ((nums[i - 1] + nums[i] + 1) % 2));
    }

    return queries.map(([from, to]) => prefix[from] - prefix[to] === 0);
};

console.log(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]));
console.log(
    isArraySpecial(
        [4, 3, 1, 6],
        [
            [0, 2],
            [2, 3],
        ]
    )
);
