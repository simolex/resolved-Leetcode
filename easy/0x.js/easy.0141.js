/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let count = 1;
    let start = head;

    while (start != null) {
        let rest = count;
        let current = start;
        while (current !== null && rest > 0) {
            if (current.next === null) {
                return false;
            } else if (current.next === start) {
                return true;
            }
            current = current.next;
            rest--;
        }
        if (current === null) {
            return false;
        }
        start = current;
        count *= 2;
    }
    return false;
};

var hasCycle = function (head) {
    if (!head) return false;

    let normal = head;
    let fast = head.next;

    while (normal !== fast && fast) {
        normal = normal.next;
        fast = fast.next;
        fast && (fast = fast.next);
    }

    return normal === fast && fast;
};
