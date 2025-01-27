/**
 * 437. Path Sum III
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
 * @return {number}
 */

var pathSum = function (root, targetSum) {
    if (root == null) {
        return 0;
    }
    let count = 0;
    const nodesPrefix = { 0: 1 };

    const dfs = (node, curSum) => {
        curSum += node.val;

        let breakPoint = curSum - targetSum;
        if (nodesPrefix[breakPoint]) {
            count += nodesPrefix[breakPoint];
        }
        nodesPrefix[curSum] = nodesPrefix[curSum] || 0;
        nodesPrefix[curSum]++;

        if (node.left) dfs(node.left, curSum);
        if (node.right) dfs(node.right, curSum);
        nodesPrefix[curSum]--;
    };

    dfs(root, 0);

    return count;
};
