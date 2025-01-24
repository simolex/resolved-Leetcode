/**
 * 113. Path Sum II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let result = [];

    if (root == null) {
        return result;
    }

    const dfs = (node, curSum, path) => {
        curSum += node.val;
        path.push(node.val);

        if (!node.left && !node.right && curSum === targetSum) {
            result.push(Array.from(path));
        }

        if (node.left) dfs(node.left, curSum, path);
        if (node.right) dfs(node.right, curSum, path);

        path.pop();
    };

    dfs(root, 0, []);

    return result;
};
