/**
 * 206. Reverse Linked List
 *
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
var reverseList = function (head) {
    if (head == null || head.next === null) return head;
    let newHead = head;

    head = head.next;
    newHead.next = null;

    while (head !== null) {
        const next = head.next;

        head.next = newHead;
        newHead = head;

        head = next;
    }
    return newHead;
};
