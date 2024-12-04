/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    let result = head;
    let front = head.next;

    if (!front) {
        return null;
    }

    while (front && front.next && front.next.next) {
        head = head.next;
        front = front.next.next;
    }

    head.next = head.next.next;
    return result;
};
