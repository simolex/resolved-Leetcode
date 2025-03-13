/**
 * 3356. Zero Array Transformation II
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
    let n = nums.length;

    const applyQueries = (k) => {
        const prefix = Array(n + 1).fill(0);
        let l, r, val;
        let current = 0;
        let isAllZero = true;

        for (let q = 0; q < k; q++) {
            [r, l, val] = queries[q];
            prefix[r] += val;
            prefix[l + 1] -= val;
        }

        for (let i = 0; i < n && isAllZero; i++) {
            current += prefix[i];
            if (nums[i] > current) {
                isAllZero = false;
            }
        }
        return isAllZero;
    };

    let left = 0;
    let right = queries.length;
    let mid;

    while (left < right) {
        mid = left + Math.floor((right - left) / 2);
        if (applyQueries(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return applyQueries(left) ? left : -1;
};

// console.log(
//     minZeroArray(
//         [2, 0, 2],
//         [
//             [0, 2, 1],
//             [0, 2, 1],
//             [1, 1, 3],
//         ]
//     )
// );
// console.log(
//     minZeroArray(
//         [4, 3, 2, 1],
//         [
//             [1, 3, 2],
//             [0, 2, 1],
//         ]
//     )
// );
console.log(
    minZeroArray(
        [5],
        [
            [0, 0, 5],
            [0, 0, 1],
            [0, 0, 3],
            [0, 0, 2],
        ]
    )
);
