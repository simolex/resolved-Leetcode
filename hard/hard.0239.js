/**
 * 239. Sliding Window Maximum
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Deque {
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

var maxSlidingWindow = function (nums, k) {
    const minRange = [];
    const deque = new Deque();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (i >= k && deque.peek_front() === nums[i - k]) {
            deque.pop_front();
        }

        while (deque.size() > 0 && deque.peek_back() < nums[i]) {
            deque.pop_back();
        }
        deque.push_back(nums[i]);

        if (i >= k - 1) {
            minRange.push(deque.peek_front());
        }
    }

    return minRange;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //3, 3, 5, 5, 6, 7
console.log(maxSlidingWindow([1], 1)); //1
