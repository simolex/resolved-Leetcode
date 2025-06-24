/**
 * 2200. Find All K-Distant Indices in an Array
 */

var findKDistantIndices = (nums: number[], key: number, k: number): number[] => {
    const result: number[] = [];
    let n = nums.length;
    const ranges = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        if (nums[i] === key) {
            ranges[i < k ? 0 : i - k]++;
            ranges[i + k + 1 <= n ? i + k + 1 : n]--;

        }
    }

    let cntRange = 0;
    for (let i = 0; i < n; i++) {
        cntRange += ranges[i];
        if (cntRange > 0) {
            result.push(i);
        }
    }

    return result;
};

var findKDistantIndices = (nums: number[], key: number, k: number): number[] => {
    const result: number[] = [];
    let n = nums.length;
    let left = 0;
    let idx = 0;

    while (idx < n) {
        if (nums[idx] === key) {
            left = Math.max(left, idx - k);
            let right = Math.min(n - 1, idx + k);
            for (let i = left; i <= right; i++) {
                if (nums[i] === key) {
                    right = Math.min(n - 1, i + k)
                }
                result.push(i)
            }
            left = right + 1
            idx = right + 1;
        } else { idx++; }
    }

    return result;
}

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
console.log(findKDistantIndices([1], 1, 1));
