/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    if (Array.isArray(arr)) {
        for (let element of arr) {
            yield* inorderTraversal(element);
        }
    } else {
        yield arr;
    }
};

var inorderTraversal = function* (arr) {
    const inorder = arr.flat(Number.MAX_SAFE_INTEGER);

    for (let element of inorder) {
        yield element;
    }
};

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done); // 3
