/**
 * @param {number[]} nums
 * @return {number}
 */
class DSU {
    parent;
    weight;
    constructor() {
        this.parent = new Map();
        this.weight = new Map();
    }
    add(v) {
        if (!this.parent.has(v)) {
            this.parent.set(v, v);
            this.weight.set(v, 1);
        }
    }

    find(v) {
        if (this.parent.has(v)) {
            if (this.parent.get(v) === v) {
                return v;
            } else {
                let a = this.find(this.parent.get(v));
                this.parent.set(v, a);
                return a;
            }
        }

        return null;
    }

    union(a, b) {
        a = this.find(a);
        b = this.find(b);

        if (a === null || b === null || a === b) {
            return null;
        }

        if (this.weight.get(a) > this.weight.get(b)) {
            [a, b] = [b, a];
        }

        this.weight.set(b, this.weight.get(b) + this.weight.get(a));
        this.parent.set(a, b);
    }

    size(v) {
        v = this.find(v);
        return this.weight.get(v);
    }
}

var longestConsecutive = function (nums) {
    let n = nums.length;
    let maxSize = 0;
    const set = new DSU();
    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
        set.union(nums[i], nums[i] - 1);
        set.union(nums[i] + 1, nums[i]);
        maxSize = Math.max(maxSize, set.size(nums[i]));
    }
    return maxSize;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

console.log(longestConsecutive([1, 2, 0, 1]));
