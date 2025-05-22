/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 * 101. Symmetric Tree
 */
function isSymmetric(root: TreeNode | null): boolean {

    const compare = (leftRoot: TreeNode | null, rightRoot: TreeNode | null): boolean => {
        let result = true;

        if (leftRoot?.val !== rightRoot?.val) {
            return false;
        }

        if (((leftRoot?.left ? 1 : 0) ^ (rightRoot?.right ? 1 : 0)) === 0) {
            if (leftRoot?.left && rightRoot?.right)
                result &&= compare(leftRoot?.left, rightRoot?.right)
        } else {
            return false;
        }

        if (((leftRoot?.right ? 1 : 0) ^ (rightRoot?.left ? 1 : 0)) === 0) {
            if (leftRoot?.right && rightRoot?.left)
                result &&= compare(leftRoot?.right, rightRoot?.left)
        } else {
            return false;
        }

        return result
    }

    if (root === null) return true;
    return compare(root.left, root.right);
};