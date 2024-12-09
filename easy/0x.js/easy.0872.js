/**
 * 872. Leaf-Similar Trees
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const rRootL = function (r, arr) {
        if (!r.left && !r.right) {
            arr.push(r.val);
        }
        if (r.left) {
            rRootL(r.left, arr);
        }
        if (r.right) {
            rRootL(r.right, arr);
        }

        return arr;
    };
    const r1 = rRootL(root1, []);
    const r2 = rRootL(root2, []);

    if (r1.length === r2.length) {
        for (let i = 0; i < r1.length; i++) {
            if (r1[i] !== r2[i]) {
                return false;
            }
        }
        return true;
    }

    return false;
};
