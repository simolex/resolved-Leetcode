/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node, set = new Map()) {
    let cloneNode;
    if (node) {
        if (!set.has(node.val)) {
            cloneNode = { val: node.val, neighbors: [] };
            set.set(node.val, cloneNode);
            for (let neigh of node.neighbors) {
                cloneNode.neighbors.push(cloneGraph(neigh, set));
            }
        } else {
            cloneNode = set.get(node.val);
        }
    }
    return cloneNode;
};
