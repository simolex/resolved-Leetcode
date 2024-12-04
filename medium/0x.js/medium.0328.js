/**
 * 328. Odd Even Linked List
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
var oddEvenList = function (head) {
    let even;
    const odd = head;
    let num = 1;
    while (head) {
        if (num % 2 == 1) {
            if (even) {
                even.next = head.next;
                even = even.next;
            } else {
                even = head.next;
            }

            head.next = even.next;
            even.next = undefined;
        }

        num++;
    }
};
