/**
 * 2762. Continuous Subarrays
 *
 * @param {number[]} nums
 * @return {number}
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

var continuousSubarrays = function (nums) {
    const n = nums.length;
    const maxRangeIndex = new Deque_();
    const minRangeIndex = new Deque_();
    let minIndex = 0;
    let maxIndex = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        while (maxRangeIndex.size() > 0 && nums[maxRangeIndex.peek_back()] < nums[i]) {
            maxRangeIndex.pop_back();
        }

        while (maxRangeIndex.size() > 0 && nums[maxRangeIndex.peek_front()] > nums[i] + 2) {
            maxIndex = maxRangeIndex.peek_front() + 1;
            maxRangeIndex.pop_front();
        }

        while (minRangeIndex.size() > 0 && nums[minRangeIndex.peek_back()] > nums[i]) {
            minRangeIndex.pop_back();
        }

        while (minRangeIndex.size() > 0 && nums[minRangeIndex.peek_front()] < nums[i] - 2) {
            minIndex = minRangeIndex.peek_front() + 1;
            minRangeIndex.pop_front();
        }

        result += i - Math.max(minIndex, maxIndex) + 1;

        minRangeIndex.push_back(i);
        maxRangeIndex.push_back(i);
    }
    return result;
};

console.log(continuousSubarrays([5, 4, 2, 4]));
console.log(continuousSubarrays([1, 2, 3]));
console.log(continuousSubarrays([1, 2, 3, 2]));
