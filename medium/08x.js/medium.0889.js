/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    let node, root;
    let n = preorder.length;
    let pntPreorder = 0;
    let pntPostorder = 0;

    const stack = [];
    root = new TreeNode(preorder[pntPreorder++]);
    stack.push(root);
    while (stack.length && pntPreorder < n) {
        node = stack.pop();
        if (node.val === postorder[pntPostorder]) {
            pntPostorder++;
            continue;
        }

        if (!node.left) {
            node.left = new TreeNode(preorder[pntPreorder++]);
            stack.push(node, node.left);
        } else {
            node.right = new TreeNode(preorder[pntPreorder++]);
            stack.push(node, node.right);
        }
    }
    return root;
};

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));
