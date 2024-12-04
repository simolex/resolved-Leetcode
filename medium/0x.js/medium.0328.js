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
    const result = head;
    let even = null;
    let evenHead = null;

    let currentEven = null;
    let isOdd = true;
    if (!head) {
        return head;
    }

    while (head.next != null) {
        if (isOdd) {
            //вырезаем четный элемент
            currentEven = head.next;
            if (currentEven !== null) {
                head.next = currentEven.next;
                currentEven.next = null;
            } else {
                head.next = null;
            }
            //формируем цепочку четных
            if (even === null) {
                even = currentEven;
                evenHead = even;
            } else {
                even.next = currentEven;
                even = even.next;
            }
        } else {
            head = head.next;
        }
        isOdd = !isOdd;
    }
    //прицепляем четные в конце списка
    head.next = evenHead;

    return result;
};

//тестирование
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const a = [2, 1, 3, 5, 6, 4, 7].reverse().reduce((prev, v) => new ListNode(v, prev), undefined);
console.dir(a, { depth: null });
console.dir(oddEvenList(a), { depth: null });
