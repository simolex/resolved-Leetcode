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
 * @return {number}
 */
var maxLevelSum = function (root) {
    let pntLevel = 0;
    let floor = 1;
    let maxFloor = 1;
    const level = [];
    if (!root) {
        return root;
    }

    level.push(root);
    let maxSum = root.val;

    while (pntLevel < level.length) {
        floor++;
        const current = level.length;
        while (pntLevel < current) {
            if (level[pntLevel].left) level.push(level[pntLevel].left);
            if (level[pntLevel].right) level.push(level[pntLevel].right);
            pntLevel++;
        }
        if (pntLevel < level.length) {
            let sum = 0;
            for (let i = pntLevel; i < level.length; i++) {
                sum += level[i].val;
            }

            if (maxSum < sum) {
                maxFloor = floor;
                maxSum = sum;
            }
        }
    }
    return maxFloor;
};
