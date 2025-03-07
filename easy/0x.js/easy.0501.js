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
 * @return {number[]}
 */
var findMode = function (root, hash = new Map(), isRoot = true) {
    if (!root) return [];

    findMode(root.left, hash, false);
    findMode(root.right, hash, false);

    hash.set(root.val, -~hash.get(root.val));

    const result = [];
    if (isRoot) {
        const maxMode = Math.max(...hash.values());
        hash.forEach((cnt, value) => {
            if (cnt === maxMode) {
                result.push(value);
            }
        });
    }

    return result;
};
