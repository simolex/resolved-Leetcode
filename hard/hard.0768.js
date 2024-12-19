/**
 * 768. Max Chunks To Make Sorted II
 *
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] <= arr[i]) {
            stack.push(arr[i]);
        } else {
            let top = stack[stack.length - 1];
            while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
                stack.pop();
            }
            stack.push(top);
        }
    }
    return stack.length;
};

console.log(maxChunksToSorted([5, 4, 3, 2, 1])); //1
console.log(maxChunksToSorted([2, 1, 3, 4, 4])); //4
console.log(maxChunksToSorted([1, 1, 0, 0, 1])); //2
console.log(maxChunksToSorted([1, 0, 1, 3, 2])); //3
