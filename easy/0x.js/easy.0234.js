/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let start = head;
    let end = head;

    while (end && end.next) {
        start = start.next;
        end = end.next.next;
    }

    let prev = start;
    let next = prev.next;
    prev.next = null;
    while (next) {
        end = next.next;
        next.next = prev;
        prev = next;
        next = end;
    }

    start = head;
    end = prev;
    while (end) {
        if (start.val !== end.val) return false;
        start = start.next;
        end = end.next;
    }
    return true;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))))));
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))));
