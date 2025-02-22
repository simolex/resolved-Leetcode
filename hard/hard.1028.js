// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * 1028. Recover a Tree From Preorder Traversal
 *
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    let res, depth, node, root;
    const regNode = /([-]*)([0-9]+)/g;
    const stack = [];

    res = regNode.exec(traversal);
    root = new TreeNode(Number(res[2]));
    stack.push({ depth: 0, node: root });

    res = regNode.exec(traversal);
    while (stack.length && res !== null) {
        ({ depth, node } = stack.pop());

        if (res[1].length == depth + 1) {
            if (!node.left) {
                node.left = new TreeNode(Number(res[2]));
                stack.push({ depth, node }, { depth: depth + 1, node: node.left });
            } else {
                node.right = new TreeNode(Number(res[2]));
                stack.push({ depth: depth + 1, node: node.right });
            }
            res = regNode.exec(traversal);
        }
    }
    return root;
};

console.log(recoverFromPreorder("1-2--3--4-5--6--7"));
console.log(recoverFromPreorder("1-2--3---4-5--6---7"));
console.log(recoverFromPreorder("1-401--349---90--88"));
