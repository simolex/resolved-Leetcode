/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let pntLevel = 0;
    let floor = 0;
    const level = [];

    const obj = {};
    obj[x] = [];
    obj[y] = [];

    if (!root) {
        return root;
    }

    level.push(root);

    if (root.val === x || root.val === y) {
        obj[root.val].push(null);
        obj[root.val].push(floor);
    }

    while (pntLevel < level.length) {
        const current = level.length;
        floor++;
        while (pntLevel < current) {
            if (level[pntLevel].left) {
                level.push(level[pntLevel].left);
                if (level[pntLevel].left.val === x || level[pntLevel].left.val === y) {
                    obj[level[pntLevel].left.val].push(level[pntLevel]);
                    obj[level[pntLevel].left.val].push(floor + 1);
                }
            }
            if (level[pntLevel].right) {
                level.push(level[pntLevel].right);
                if (level[pntLevel].right.val === x || level[pntLevel].right.val === y) {
                    obj[level[pntLevel].right.val].push(level[pntLevel]);
                    obj[level[pntLevel].right.val].push(floor + 1);
                }
            }
            pntLevel++;
        }
    }

    return obj[x][1] === obj[y][1] && obj[x][0] !== obj[y][0];
};
