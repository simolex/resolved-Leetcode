/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1261. Find Elements in a Contaminated Binary Tree
 *
 * @param {TreeNode} root
 */
var FindElements = function (root) {
    this.hash = new Set();

    const stack = [];
    let node, value;
    stack.push(0, root);
    while (stack.length) {
        node = stack.pop();
        value = stack.pop();

        this.hash.add(value);

        if (node.left) {
            stack.push(2 * value + 1, node.left);
        }

        if (node.right) {
            stack.push(2 * value + 2, node.right);
        }
    }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.hash.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
