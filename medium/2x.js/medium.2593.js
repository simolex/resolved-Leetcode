/**
 * 2593. Find Score of an Array After Marking All Elements
 *
 * @param {number[]} nums
 * @return {number}
 */

function ListNode(val, prev, next) {
    this.marked = false;
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
}

var findScore = function (nums) {
    let head = new ListNode(0);
    const store = [];
    const tail = nums.reduce((prev, val, i) => {
        prev.next = new ListNode(val, prev);
        store.push(prev.next);
        return prev.next;
    }, head);

    head = head.next;
    head.prev = null;

    store.sort((a, b) => a.val - b.val);
    let sum = 0;
    for (let i = 0; i < store.length; i++) {
        if (!store[i].marked) {
            sum += store[i].val;
            store[i].marked = true;
            if (store[i].prev !== null) {
                store[i].prev.marked = true;
            }
            if (store[i].next !== null) {
                store[i].next.marked = true;
            }
        }
    }
    return sum;
};

console.log(findScore([2, 1, 3, 4, 5, 2]));
