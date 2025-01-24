/**
 * 199. Binary Tree Right Side View
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let pntLevel = 0;
    const result = [];
    const level = [];
    if (!root) {
        return result;
    }

    level.push(root);
    while (pntLevel < level.length) {
        result.push(level[level.length - 1].val);
        const current = level.length;
        while (pntLevel < current) {
            if (level[pntLevel].left) level.push(level[pntLevel].left);
            if (level[pntLevel].right) level.push(level[pntLevel].right);
            pntLevel++;
        }
    }
    return result;
};
