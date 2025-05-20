/**
 * 3355. Zero Array Transformation I
 */
function isZeroArray(nums: number[], queries: number[][]): boolean {
    let n = nums.length;
    let prefix = Array(n + 1).fill(0);

    for (const [l, r] of queries) {
        prefix[l]++;
        prefix[r + 1]--;
    }

    let current = 0;
    return nums.reduce((result, num, idx) => {
        current += prefix[idx];
        return result && num - current <= 0;
    }, true);
}

console.log(isZeroArray([1, 0, 1], [[0, 2]]));
console.log(
    isZeroArray(
        [4, 3, 2, 1],
        [
            [1, 3],
            [0, 2],
        ]
    )
);
