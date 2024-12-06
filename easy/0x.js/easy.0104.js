/**
 * 104. Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
    const rRootL = function (r, count) {
        let current = count;
        if (r.left) {
            current = Math.max(current, rRootL(r.left, count + 1));
        }
        if (r.right) {
            current = Math.max(current, rRootL(r.right, count + 1));
        }
        return current;
    };

    if (root == null) {
        return 0;
    }

    return rRootL(root, 1);
};
