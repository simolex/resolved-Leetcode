/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let result = [];
    let size = 0;
    let partSize, prev;
    let current = head;

    while (current) {
        size++;
        current = current.next;
    }
    let partHead;
    current = head;
    while (k) {
        partSize = Math.ceil(size / k);
        size -= partSize;

        prev = null;
        partHead = current;
        while (partSize) {
            prev = current;
            current = current.next;
            partSize--;
        }
        if (prev) {
            prev.next = null;
        }
        result.push(partHead);
        k--;
    }
    return result;
};
