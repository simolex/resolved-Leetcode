/**
 * 2542. Maximum Subsequence Score
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChild(i) {
        return 2 * i + 1;
    }

    getRightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() {
        if (this.heap.length) return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();
        let data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return data;
    }

    sinkDown(index) {
        let min = index;
        let left = this.getLeftChild(index);
        let right = this.getRightChild(index);

        if (index < this.heap.length && this.heap[left] < this.heap[min]) {
            min = left;
        }

        if (index < this.heap.length && this.heap[right] < this.heap[min]) {
            min = right;
        }

        if (min != index) {
            this.swap(min, index);
            this.sinkDown(min);
        }
    }

    bubbleUp(index) {
        let parent = this.getParent(index);
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    size() {
        return this.heap.length;
    }
}

var maxScore = function (nums1, nums2, k) {
    let n = nums1.length;
    const heap = new MinHeap();
    const indeces = Array.from({ length: n }, (_, i) => i);
    indeces.sort((a, b) => nums2[b] - nums2[a]);

    let KthSum = 0;
    let result = -Infinity;

    for (let idx of indeces) {
        KthSum += nums1[idx];
        heap.push(nums1[idx]);

        if (heap.size() >= k) {
            if (heap.size() > k) KthSum -= heap.pop();
            result = Math.max(result, KthSum * nums2[idx]);
        }
    }

    return result;
};

console.log(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3));
console.log(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1));
console.log(maxScore([2, 1, 14, 12], [11, 7, 13, 6], 3));
