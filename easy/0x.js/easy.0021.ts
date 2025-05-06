class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head = null;
    let current = null;
    let candidate;
    while (list1 || list2) {
        if (list1 !== null && (list2 === null || list1.val <= list2.val)) {
            candidate = list1;
            list1 = list1.next;
        } else {
            candidate = list2;
            if (list2) list2 = list2.next;
        }

        if (current) {
            current.next = candidate;
            current = current.next;
        } else {
            head = candidate;
            current = candidate;
        }
    }
    return head;
}

console.log(
    mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(2, new ListNode(4)))
    )
);
