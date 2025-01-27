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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
    let pntLevel = 0;
    const level = [];
    const parent = [];
    const over = [];
    if (!root) {
        return root;
    }

    level.push(root);
    parent.push(null);
    root.val = 0;
    while (pntLevel < level.length) {
        const current = level.length;
        while (pntLevel < current) {
            if (level[pntLevel].left) {
                level.push(level[pntLevel].left);
                parent.push(level[pntLevel]);
            }
            if (level[pntLevel].right) {
                level.push(level[pntLevel].right);
                parent.push(level[pntLevel]);
            }
            pntLevel++;
        }
        if (pntLevel < level.length) {
            let sum = 0;
            for (let i = pntLevel; i < level.length; i++) {
                sum += level[i].val;
            }
            for (let i = pntLevel; i < level.length; i++) {
                over[i] = (parent[i].left ? parent[i].left.val : 0) + (parent[i].right ? parent[i].right.val : 0);
            }
            for (let i = pntLevel; i < level.length; i++) {
                level[i].val = sum - over[i];
            }
        }
    }
    return root;
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const tree = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(1), new TreeNode(10)),
    new TreeNode(9, null, new TreeNode(7))
);

console.dir(replaceValueInTree(tree), { depth: 5 });
