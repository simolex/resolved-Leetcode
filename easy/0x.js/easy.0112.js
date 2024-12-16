/**
 * 112. Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root == null) {
        return false;
    }

    let result = false;

    const dfs = (node, curSum) => {
        curSum += node.val;

        if (!node.left && !node.right && curSum === targetSum) {
            result = result || true;
        }

        if (node.left) dfs(node.left, curSum);
        if (node.right) dfs(node.right, curSum);
    };

    dfs(root, 0);

    return result;
};
