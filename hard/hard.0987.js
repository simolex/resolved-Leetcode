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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    const columns = new Map();
    const result = [];

    const dfs = (node, row, col) => {
        if (!columns.has(col)) {
            columns.set(col, []);
        }
        columns.get(col).push([row, node.val]);

        if (node.left) dfs(node.left, row + 1, col - 1);
        if (node.right) dfs(node.right, row + 1, col + 1);
    };

    dfs(root, 0, 0);

    const keyColumns = [...columns.keys()].map(Number);
    keyColumns.sort((a, b) => a - b);

    const sorted = (arr) => {
        arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        return arr;
    };

    for (let key of keyColumns) {
        result.push(sorted(columns.get(key)).map((v) => v[1]));
    }

    return result;
};
