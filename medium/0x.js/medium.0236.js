/**
 * 236. Lowest Common Ancestor of a Binary Tree
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root.val === p || root.val === q) {
        // .val ?????????
        return root;
    }
    let resL = lowestCommonAncestor(root.left, p, q);
    let resR = lowestCommonAncestor(root.right, p, q);

    const twist = resL && resR;
    const lor = resL || resR;
    return twist ? root : lor;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const tree = new TreeNode(
    3,
    new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
    new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

console.log(lowestCommonAncestor(tree, 5, 4));
