/**
 * 117. Populating Next Right Pointers in Each Node II
 *
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    let pntLevel = 0;
    const level = [];
    if (!root) {
        return root;
    }

    level.push(root);
    while (pntLevel < level.length) {
        const current = level.length;
        while (pntLevel < current) {
            if (level[pntLevel].left) level.push(level[pntLevel].left);
            if (level[pntLevel].right) level.push(level[pntLevel].right);
            pntLevel++;
        }
        for (let i = pntLevel; i < level.length - 1; i++) {
            level[i].next = level[i + 1];
        }
    }
    return root;
};
