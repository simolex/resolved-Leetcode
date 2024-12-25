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
var largestValues = function (root) {
    const levelMax = [];
    const rRootL = function (r, level) {
        while (level + 1 > levelMax.length) {
            levelMax.push(-Infinity);
        }
        if (r.val > levelMax[level]) {
            levelMax[level] = r.val;
        }
        if (r.left) {
            rRootL(r.left, level + 1);
        }
        if (r.right) {
            rRootL(r.right, level + 1);
        }
    };

    if (root == null) {
        return [];
    }

    rRootL(root, 0);

    return levelMax;
};
