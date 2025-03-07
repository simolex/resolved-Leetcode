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
 * @return {boolean}
 */
var isValidBST = function (root, path = []) {
    let result = true;

    if (root.left) {
        result = result && isValidBST(root.left, path);
    }

    if (path.length && path[path.length - 1] >= root.val) {
        return false;
    }

    path.push(root.val);

    if (root.right) {
        result = result && isValidBST(root.right, path);
    }

    return result;
};

var isValidBST = function (root, leftMax = -Infinity, rightMax = Infinity) {
    if (!root) return true;

    if (root.val <= leftMax || root.val >= rightMax) {
        return false;
    }

    const testLeft = isValidBST(root.left, leftMax, root.val);
    const testRight = isValidBST(root.right, root.val, rightMax);

    return testLeft && testRight;
};
