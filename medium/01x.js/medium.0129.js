/**
 * 129. Sum Root to Leaf Numbers
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
var sumNumbers = function (root) {
    let result = [];

    if (root == null) {
        return 0;
    }

    const dfs = (node, path) => {
        path.push(node.val);

        if (!node.left && !node.right) {
            result.push(Number(Array.from(path).join("")));
        }

        if (node.left) dfs(node.left, path);
        if (node.right) dfs(node.right, path);

        path.pop();
    };

    dfs(root, []);

    return result.reduce((sum, v) => sum + v, 0);
};
