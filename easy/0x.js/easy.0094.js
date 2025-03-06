/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 94. Binary Tree Inorder Traversal
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, result = []) {
    if (!root) return result;

    if (root.left) inorderTraversal(root.left, result);
    result.push(root.val);
    if (root.right) inorderTraversal(root.right, result);

    return result;
};
