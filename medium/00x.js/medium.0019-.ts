/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**
 * 19. Remove Nth Node From End of List
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow = head;
    let fast = head?.next || null;
    let mid = 1;
    let right = 1 + (fast ? 1 : 0);
    while (fast?.next) {
        if (fast?.next?.next) {
            if (slow) {
                slow = slow.next;
                mid++;
            }
            right += 2;
            fast = fast.next.next;
        } else {
            break;
        }
    }
    if (fast?.next) {
        right++;
        // mid++;
    }

    let start;
    let steps = 0;
    if (right - mid < n) {
        start = head;
        steps = right - n;
        if (steps <= 0) {
            return head!.next;
        }
    } else {
        start = slow;
        steps = right - mid - n;
    }

    while (start && steps--) {
        start = start.next;
    }
    if (start) start.next = start.next?.next || null;

    return head;
}

console.dir(
    removeNthFromEnd(
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
        2
    ),
    { depth: 100 }
);

console.dir(removeNthFromEnd(new ListNode(1), 1), { depth: 100 });
console.dir(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1), { depth: 100 });

console.dir(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3))), 2), { depth: 100 });
