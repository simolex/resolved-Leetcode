/**
 * 82. Remove Duplicates from Sorted List II
 */
// @ts-ignore
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let result = { next: head };
    let current = head;
    let prev = result;

    while (current?.next) {
        let dupleExist = false;
        while (current?.next && current.val === current.next.val) {
            current.next = current.next.next;
            dupleExist = true;
        }
        if (dupleExist) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }
    return result.next;
}
