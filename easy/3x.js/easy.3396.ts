var minimumOperations = (nums: number[]): number => {
    let n = nums.length;
    let set = new Set<number>();

    let i;
    for (i = n - 1; i >= 0; i--) {
        if (set.has(nums[i])) {
            return Math.ceil((i + 1) / 3);
        }
        set.add(nums[i]);
    }

    return 0;
};

var minimumOperations = (nums: number[]): number => {
    let n = nums.length;
    let set = new Int8Array(128);

    for (let i = n - 1; i >= 0; i--) {
        if (set[nums[i]] !== 0) {
            return Math.ceil((i + 1) / 3);
        }
        set[nums[i]] = 1;
    }

    return 0;
};

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
console.log(minimumOperations([4, 5, 6, 4, 4]));
console.log(minimumOperations([6, 7, 8, 9]));
