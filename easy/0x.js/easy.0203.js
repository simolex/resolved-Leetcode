/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 203. Remove Linked List Elements
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let prev = { next: head };
    let headHolder = prev;
    let current = head;
    while (current) {
        if (current.val == val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return headHolder.next;
};
