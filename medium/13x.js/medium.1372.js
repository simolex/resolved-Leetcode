/**
 * 1372. Longest ZigZag Path in a Binary Tree
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
var longestZigZag = function (root) {
    let maxLength = 0;

    const dfs = (node, len, prevRight) => {
        maxLength = Math.max(maxLength, len);

        if (prevRight === undefined) {
            if (node.left) dfs(node.left, 1, false);
            if (node.right) dfs(node.right, 1, true);
        }

        if (node.left) dfs(node.left, prevRight ? len + 1 : 1, false);
        if (node.right) dfs(node.right, prevRight ? 1 : len + 1, true);
    };

    dfs(root, 0);
    return maxLength;
};
