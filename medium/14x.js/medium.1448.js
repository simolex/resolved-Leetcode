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
 * @return {number}
 */
var goodNodes = function (root) {
    const rRootL = function (r, max = -Infinity) {
        let count = r.val >= max ? 1 : 0;

        max = Math.max(r.val, max);

        if (r.left) {
            count += rRootL(r.left, max);
        }

        if (r.right) {
            count += rRootL(r.right, max);
        }

        return count;
    };

    if (root === null) return 0;

    return rRootL(root);
};
