/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
    return height.map((_, i) => (i > 0 && height[i - 1] > threshold ? i : -1)).filter((i) => i > 0);
};

console.log(stableMountains([1, 2, 3, 4, 5], 2));
console.log(stableMountains([10, 1, 10, 1, 10], 3));
console.log(stableMountains([10, 1, 10, 1, 10], 10));
