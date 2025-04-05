/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 61. Rotate List
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;

    let size = 0;
    let prev;
    let current = head;
    while (current) {
        size++;
        prev = current;
        current = current.next;
    }

    k %= size;
    current = head;
    prev.next = head;

    let shifts = (size - k) % size;

    while (shifts) {
        shifts--;
        prev = current;
        current = current.next;
    }
    prev.next = null;

    return current;
};
