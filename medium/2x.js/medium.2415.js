/**
 * 2415. Reverse Odd Levels of Binary Tree
 *
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
var reverseOddLevels = function (root) {
    let pntLevel = 0;
    const level = [];
    let floor = 0;
    if (!root) {
        return root;
    }

    level.push(root);
    while (pntLevel < level.length) {
        const pntLast = level.length;
        floor++;

        while (pntLevel < pntLast) {
            if (level[pntLevel].left) level.push(level[pntLevel].left);
            if (level[pntLevel].right) level.push(level[pntLevel].right);
            pntLevel++;
        }
        if (floor % 2 === 1) {
            const size = level.length;
            for (let i = pntLevel; i < (size + pntLevel) / 2; i++) {
                const swap = level[i].val;
                level[i].val = level[size - i + pntLevel - 1].val;
                level[size - i + pntLevel - 1].val = swap;
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
    1,
    new TreeNode(
        2,
        new TreeNode(4, new TreeNode(8), new TreeNode(9)),
        new TreeNode(5, new TreeNode(10), new TreeNode(11))
    ),
    new TreeNode(
        3,
        new TreeNode(6, new TreeNode(12), new TreeNode(13)),
        new TreeNode(7, new TreeNode(14), new TreeNode(15))
    )
);

console.dir(reverseOddLevels(tree), { depth: 5 });
