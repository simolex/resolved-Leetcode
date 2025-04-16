type NumObj = { c: number };

function countGood(nums: number[], k: number): number {
    let result = 0;
    const n = nums.length;
    const freq = new Map<number, NumObj>();
    let left = 0;
    let countPairs = 0;

    for (let right = 0; right < n; right++) {
        const num = nums[right];
        if (!freq.has(num)) {
            freq.set(num, { c: 0 });
        }
        const current = freq.get(num)!;
        countPairs += current.c;
        current.c++;

        while (countPairs >= k) {
            result += n - right;
            const leftNum = nums[left];
            const leftCurrent = freq.get(leftNum)!;
            leftCurrent.c--;
            countPairs -= leftCurrent.c;
            left++;
        }
    }

    return result;
}

console.log(countGood([1, 1, 1, 1, 1], 10)); // 1
console.log(countGood([3, 1, 4, 3, 2, 2, 4], 2)); // 6