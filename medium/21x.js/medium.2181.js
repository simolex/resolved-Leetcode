/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2181. Merge Nodes in Between Zeros
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let sumNode = head;
    let current = head.next;

    while (current && current.next) {
        if (current.val !== 0) {
            sumNode.val += current.val;
        } else {
            sumNode.next = current;
            if (current.next) sumNode = current;
        }
        current = current.next;
    }
    sumNode.next = null;
    return head;
};
