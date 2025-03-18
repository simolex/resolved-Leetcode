/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2326. Spiral Matrix IV
 *
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    const result = Array.from({ length: m }, () => Array(n).fill(-1));
    let rowFrom = 0;
    let rowTo = m;
    let colFrom = 0;
    let colTo = n;

    while (head) {
        // Двигаемся по верхней стороне
        if (head && rowFrom < rowTo) {
            for (let i = colFrom; i < colTo; i++) {
                if (!head) break;
                result[rowFrom][i] = head.val;
                head = head.next;
            }
            rowFrom++;
        }

        // Двигаемся по правой стороне
        if (head && colFrom < colTo) {
            for (let j = rowFrom; j < rowTo; j++) {
                if (!head) break;
                result[j][colTo - 1] = head.val;
                head = head.next;
            }
            colTo--;
        }

        // Двигаемся по нижней стороне
        if (head && rowFrom < rowTo) {
            for (let i = colTo - 1; i >= colFrom; i--) {
                if (!head) break;
                result[rowTo - 1][i] = head.val;
                head = head.next;
            }
            rowTo--;
        }

        // Двигаемся по левой стороне
        if (head && colFrom < colTo) {
            for (let j = rowTo - 1; j >= rowFrom; j--) {
                if (!head) break;
                result[j][colFrom] = head.val;
                head = head.next;
            }
            colFrom++;
        }
    }
    return result;
};
