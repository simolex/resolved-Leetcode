
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


/**
 * 100. Same Tree
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let compare = true;

    if (p?.val !== q?.val) {
        return false;
    }

    if (((p?.left ? 1 : 0) ^ (q?.left ? 1 : 0)) === 0) {
        if (p?.left && q?.left)
            compare &&= isSameTree(p.left, q.left)
    } else {
        return false;
    }

    if (((p?.right ? 1 : 0) ^ (q?.right ? 1 : 0)) === 0) {
        if (p?.right && q?.right)
            compare &&= isSameTree(p.right, q.right)
    } else {
        return false;
    }
    return compare;
};