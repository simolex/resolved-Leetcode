/**
 * 689. Maximum Sum of 3 Non-Overlapping Subarrays
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Deque_ {
    deque = [];
    constructor() {
        this.clear();
    }

    _getPtr(ptr) {
        return (this.limit + ((ptr % this.limit) % this.limit)) % this.limit;
    }
    _checkSizeDeque() {
        if (this.size() >= this.limit) {
            let pos = 0;
            const newDeque = this.deque;
            this.deque = [];
            for (let i = this.ptrBack; i < this.ptrFront; i++) {
                this.deque[pos++] = newDeque[this._getPtr(i)];
            }
            this.ptrBack = 0;
            this.ptrFront = pos;
            this.limit *= 2;
        }
    }

    push_front(n) {
        this._checkSizeDeque();
        this.deque[this._getPtr(this.ptrFront++)] = n;
    }

    push_back(n) {
        this._checkSizeDeque();
        this.deque[this._getPtr(--this.ptrBack)] = n;
    }

    pop_front() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(--this.ptrFront)];
        }
        return null;
    }

    pop_back() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(this.ptrBack++)];
        }
        return null;
    }

    peek_front() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(this.ptrFront - 1)];
        }
        return null;
    }

    peek_back() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(this.ptrBack)];
        }
        return "error";
    }

    size() {
        return this.ptrFront - this.ptrBack;
    }

    clear() {
        this.deque.length = 0;
        this.ptrBack = 0;
        this.ptrFront = 0;
        this.limit = 2;
    }
}

var maxSumOfThreeSubarrays = function (nums, K) {
    const n = nums.length;
    const prefix = nums.reduce(
        (p, v) => {
            p.push(p[p.length - 1] + v);
            return p;
        },
        [0]
    );

    const sum = (start) => {
        return prefix[start + K] - prefix[start];
    };

    const dp = [];
    const maxLeft = [];
    const idxLeft = [];
    for (let i = 0; i < n - K + 1; i++) {
        const curSum = sum(i);
        dp.push(curSum);
        if (maxLeft.length > 0) {
            if (curSum > maxLeft[maxLeft.length - 1]) {
                maxLeft.push(curSum);
                idxLeft.push(i);
            } else {
                maxLeft.push(maxLeft[maxLeft.length - 1]);
                idxLeft.push(idxLeft[idxLeft.length - 1]);
            }
        } else {
            maxLeft.push(curSum);
            idxLeft.push(i);
        }
    }

    const maxRight = Array(n - K + 1).fill();
    const idxRight = Array(n - K + 1).fill();

    maxRight[n - K] = dp[n - K];
    idxRight[n - K] = n - K;

    for (let i = n - K - 1; i >= 2 * K; i--) {
        if (dp[i] >= maxRight[i + 1]) {
            maxRight[i] = dp[i];
            idxRight[i] = i;
        } else {
            maxRight[i] = maxRight[i + 1];
            idxRight[i] = idxRight[i + 1];
        }
    }

    let result;
    let max = -Infinity;
    let threeSum;

    for (let j = K; j < n - 2 * K + 1; j++) {
        threeSum = maxLeft[j - K] + dp[j] + maxRight[j + K];

        if (threeSum > max) {
            result = [idxLeft[j - K], j, idxRight[j + K]];
            max = threeSum;
        }
    }

    return result;
};

console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2));

console.log(maxSumOfThreeSubarrays([4, 5, 10, 6, 11, 17, 4, 11, 1, 3], 1));
