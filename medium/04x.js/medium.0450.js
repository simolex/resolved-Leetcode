/**
 * 450. Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root === null) {
        return root;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }
        let candidate = root.right;
        while (candidate !== null && candidate.left !== null) {
            candidate = candidate.left;
        }
        root.val = candidate.val;
        root.right = deleteNode(root.right, candidate.val);
    }
    return root;
};
